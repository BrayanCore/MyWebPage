import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction();
  }

  constructor() { }

  ngOnInit(): void {
  }

  goToProject() {
    window.location.href = "https://github.com/BrayanCore";
  }

  // When the user scrolls down 400px from the top of the document, show the button
  scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("button-top").style.display = "block";
    } else {
        document.getElementById("button-top").style.display = "none";
    }
  }

  goTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}
