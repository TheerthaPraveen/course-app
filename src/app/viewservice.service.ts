import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewserviceService {

  constructor(private http:HttpClient) {}
  addcourse(course:any){
    return this.http.post<any>("https://mylinkurcodesapp.herokuapp.com/addcourses",course);
    }
  
    ViewserviceService=()=>{
      return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses");
    }
   
}
