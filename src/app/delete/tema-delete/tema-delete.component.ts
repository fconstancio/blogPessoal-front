import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-delete',
  templateUrl: './tema-delete.component.html',
  styleUrls: ['./tema-delete.component.css']
})
export class TemaDeleteComponent implements OnInit {

  tema: Tema = new Tema()
  idTeam: number

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if(environment.token !){
      if (environment.token == '') {
        this.router.navigate(['/entrar'])
      }
    }

    this.idTeam = this.route.snapshot.params['id']
    this.findByIdTema(this.idTeam)

  }

  findByIdTema(id:number){
    this.temaService.getById(id).subscribe((resp:Tema)=>{
      this.tema = resp
    })
  }

  apagar(){
    this.temaService.deleteTema(this.idTeam).subscribe(()=>{
      alert('Tema deletado')
      this.router.navigate(['/tema'])
    })
  }

}
