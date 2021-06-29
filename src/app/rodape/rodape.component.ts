import { Component, OnInit } from '@angular/core';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {
  faGithubSquare = faGithubSquare;
  faLinkedin = faLinkedin;

  constructor() { }

  ngOnInit(): void {
  }

}
