import { Component } from '@angular/core';
import { CvsimongilService } from '../app/services/cvsimongil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public cv: CvsimongilService) { }

  title = 'simongilCV';
}
