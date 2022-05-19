import { Component, OnInit } from '@angular/core';
import { CvsimongilService } from '../services/cvsimongil.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(public cv: CvsimongilService,
              ) { }

  ngOnInit(): void {
  }

}
