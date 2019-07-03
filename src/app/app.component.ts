import { Component } from '@angular/core';

import { MockService } from './shared/services/mock.service';
import { GistService } from './shared/services/gist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public mockService: MockService,
    public gistService: GistService,
  ) {}

  ngOnInit() {
  }
}
