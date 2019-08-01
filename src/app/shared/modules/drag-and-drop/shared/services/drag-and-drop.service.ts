import { Injectable } from '@angular/core';
import { DropContainer } from '../models/DropContainer';
import { DragObject } from '../models/DragObject';

@Injectable()
export class DragAndDropService {
  public dropContainer: DropContainer<any, any>;
  public dragObject: DragObject<any> = { data: null };
}

