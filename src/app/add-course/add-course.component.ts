import { Component, OnInit } from '@angular/core';
import { ViewserviceService } from '../viewservice.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course={courseTitle:"",
  courseDescription:"",
  courseDate:"",
  courseVenue:"",
  courseDuration:""

  }

  constructor(private courseservice:ViewserviceService) { }

  ngOnInit(): void {
  }
Addcourse(){
  this.courseservice.addcourse(this.course).subscribe((data)=>{ 

    
  })

alert("Success");


}
}
