import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  showData($event: any){
    console.log("Here is my Skills"); if($event){
      console.log($event.target);
      console.log($event.target.value);
    }}
  constructor() { }

  ngOnInit() {
  }

}