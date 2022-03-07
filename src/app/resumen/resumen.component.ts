import { Component, OnInit } from '@angular/core';
import { CvsimongilService } from '../services/cvsimongil.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  constructor(public cv: CvsimongilService) { }

  ngOnInit(): void {
  }

}
