import { Component, OnInit } from '@angular/core';
import { ViewserviceService } from '../viewservice.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  constructor(private api: ViewserviceService) { 
    api.ViewserviceService().subscribe(
      (Response)=>{
        this.data=Response
      }
    )
  }

  ngOnInit(): void {
  }

  data:any=[

  ]



}
