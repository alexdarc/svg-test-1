declare type Path = string | PathComponent[];
declare type PathComponent = any[];

declare interface Intersection {
  segment1: number;
  segment2: number;
  x: number;
  y: number;
  bez1: number[];
  bez2: number[];
  t1: number;
  t2: number;
}

declare module 'path-intersection'
{
  import * as pa from 'path-intersection';

  function findPathIntersections(path1: Path, path2: Path, justCount: true): number;
  function findPathIntersections(path1: Path, path2: Path, justCount: false): Intersection[];
  function findPathIntersections(path1: Path, path2: Path): Intersection[];
  function findPathIntersections(path1: Path, path2: Path, justCount?: boolean): Intersection[] | number;

  export default findPathIntersections;
}
