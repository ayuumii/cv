import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  showData($events: any){
    console.log("Here is my Skills"); if($events){
      console.log($events.target);
      console.log($events.target.value);
    }}
  constructor() { }

  ngOnInit() {
  }

}