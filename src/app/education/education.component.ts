import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {


  showData($event: any){
    console.log("Here is my Education"); if($event){
      console.log($event.target);
      console.log($event.target.value);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}