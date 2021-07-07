import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  idTema: number
  tema: Tema = new Tema()
  listaTemas: Tema[]

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  user: User = new User()
  idUser = environment.id

  constructor(
    private router: Router,
    private temaService: TemaService,
    private postagemService: PostagemService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    this.postagemService.refreshToken()

    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }
    this.findByIdUser()
    this.findAllTema()
    this.findAllPostagem()
  }

  findByIdUser(){
    this.authService.findById(this.idUser).subscribe((resp:User)=>{
      this.user = resp
    })
  }

  findByIdTema() {
    this.temaService.getById(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  findAllTema() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findAllPostagem() {
    this.postagemService.getAllTema().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  publicar() {
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.user.id = this.idUser
    this.postagem.usuario = this.user

    this.postagemService.post(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('postagem realizada com sucesso!')
      this.postagem = new Postagem
      this.findAllPostagem()
    })
  }


}
