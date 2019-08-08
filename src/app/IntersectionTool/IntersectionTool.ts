import findPathIntersections from 'path-intersection';

import { EndEvent } from '../board/elements/end/end-event.model';
import { IFlowElement } from '../board/shared/models/flow-element.model';
import { ICoords } from '../board/shared/models/coords.model';
import { SequenceFlow } from '../board/elements/sequence-flow/sequence-flow.model';
import { StartEvent } from '../board/elements/start/start-event.model';
import { Task } from '../board/elements/task/task.model';
import { Gateway } from '../board/elements/gateway/gateway.model';

export class IntersectionTool {
  public static getIntersection(path0: string, path1: string) {
    return findPathIntersections(path0, path1);
  }

  public static getPath(flow: IFlowElement): string {
    if (flow instanceof SequenceFlow) {
      return IntersectionTool.getWaypointsPath(flow.waypoints);
    }

    if (
      flow instanceof StartEvent ||
      flow instanceof EndEvent
    ) {
      return IntersectionTool.getCirclePath({
        x: flow.x,
        y: flow.y,
        width: flow.width,
        height: flow.height,
      });
    }

    if (flow instanceof Task) {
      return IntersectionTool.getRoundRectPath({
        x: flow.x,
        y: flow.y,
        width: flow.width,
        height: flow.height,
        borderRadius: 10, // ТУТ НАДО ЧТО-ТО СДЕЛАТЬ С BORDER RADIUS, Т.К. ОН ФИКСИРОВАННЫЙ
      });
    }

    if (flow instanceof Gateway) {
      return IntersectionTool.getDiamondPath({
        x: flow.x,
        y: flow.y,
        width: flow.width,
        height: flow.height,
      });
    }
  }

  private static componentsToPath(elements: any[]) {
    return elements.join(',').replace(/,?([A-z]),?/g, '$1');
  }

  private static getWaypointsPath(waypoints: ICoords[]): string {
    return 'M' + waypoints
      .map(({x, y}) => `${x},${y}`)
      .join('L');
  }

  private static getCirclePath(options: {
    x: number,
    y: number,
    width: number,
    height: number,
  }): string {
    const cx = options.x + options.width / 2;
    const cy = options.y + options.height / 2;
    const radius = options.width / 2;

    const circlePath = [
      ['M', cx, cy],
      ['m', 0, -radius],
      ['a', radius, radius, 0, 1, 1, 0, 2 * radius],
      ['a', radius, radius, 0, 1, 1, 0, -2 * radius],
      ['z']
    ];

    return IntersectionTool.componentsToPath(circlePath);
  }

  private static getRoundRectPath(options: {
    x: number,
    y: number,
    width: number,
    height: number,
    borderRadius: number,
  }) {
    const x = options.x;
    const y = options.y;
    const width = options.width;
    const height = options.height;
    const borderRadius = options.borderRadius;

    const roundRectPath = [
      ['M', x + borderRadius, y],
      ['l', width - borderRadius * 2, 0],
      ['a', borderRadius, borderRadius, 0, 0, 1, borderRadius, borderRadius],
      ['l', 0, height - borderRadius * 2],
      ['a', borderRadius, borderRadius, 0, 0, 1, -borderRadius, borderRadius],
      ['l', borderRadius * 2 - width, 0],
      ['a', borderRadius, borderRadius, 0, 0, 1, -borderRadius, -borderRadius],
      ['l', 0, borderRadius * 2 - height],
      ['a', borderRadius, borderRadius, 0, 0, 1, borderRadius, -borderRadius],
      ['z']
    ];

    return IntersectionTool.componentsToPath(roundRectPath);
  }

  private static getDiamondPath(options: {
    x: number,
    y: number,
    width: number,
    height: number,
  }) {
    const width = options.width;
    const height = options.height;
    const x = options.x;
    const y = options.y;
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    const diamondPath = [
      ['M', x + halfWidth, y],
      ['l', halfWidth, halfHeight],
      ['l', -halfWidth, halfHeight],
      ['l', -halfWidth, -halfHeight],
      ['z']
    ];

    return IntersectionTool.componentsToPath(diamondPath);
  }
}
