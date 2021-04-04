import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {

  technologies: any[] = [
    {
      name: 'HTML5',
      image: '../../assets/images/html.png'
    },
    {
      name: 'SASS',
      image: '../../assets/images/sass.png'
    },
    {
      name: 'Javacript',
      image: '../../assets/images/javascript.png'
    },
    {
      name: 'Angular',
      image: '../../assets/images/angular.png'
    },
    {
      name: 'Flutter',
      image: '../../assets/images/flutter.png'
    },
    {
      name: 'Kotlin',
      image: '../../assets/images/kotlin.jpg'
    },
    {
      name: 'Golang',
      image: '../../assets/images/go.png'
    },
    {
      name: 'Python',
      image: '../../assets/images/python.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
