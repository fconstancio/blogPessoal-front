import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  faEdit = faEdit;
  faSignOutAlt = faSignOutAlt;

  nome: String = environment.nome
  foto: String = environment.foto

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  sair() {
    this.router.navigate(['/entrar'])
    environment.id = 0
    environment.nome = ''
    environment.token = ''
    environment.foto = ''
  }



}

