import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  description: string = "Amo la tecnología. Me gusta crecer personalmente cada día y nunca parar de aprender, colaboremos juntos, no dudes en contactarme estoy a tus ordenes.";

  constructor() { }

  ngOnInit(): void {
  }

}
