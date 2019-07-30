import { Injectable } from '@angular/core';
import { DropContainer } from './DropContainer';
import { DragObject } from './DragObject';

@Injectable({
  providedIn: 'root'
})
export class DragAndDropService {
  public dropContainer: DropContainer<any, any>;
  public dragObject: DragObject<any> = { data: null };
}

