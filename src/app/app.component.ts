import { Component } from '@angular/core';

import { MockService } from './shared/services/mock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public mockService: MockService) {}

  ngOnInit() {
  }
}
