import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
name = "Raskin Charles C. Salalila";
about = " I am a versatile, flexible, and an attentive person who will carry out task.";
 
clientName:string="raskinsalalila4@gmail.com";
clientAge:string=" 20 Years old"
constructor() { }

appliedCSSClass = 'green';
notappliedCSSClass = false;
mycolor= 'red';
  ngOnInit() {
  }

}