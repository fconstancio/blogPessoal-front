import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  getById(id:number):Observable<Postagem>{
    return this.http.get<Postagem>(`${environment.uri}/postagens/${id}`, this.token)
  }

  getAllTema(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(`${environment.uri}/postagens`, this.token)
  }

  post(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>(`${environment.uri}/postagens`, postagem, this.token)
  }

  put(postagem: Postagem):Observable<Postagem>{
    return this.http.put<Postagem>(`${environment.uri}/postagens`, postagem, this.token)
  }

  delete(id:number){
    return  this.http.delete(`${environment.uri}/postagens/${id}`, this.token)
  }

}
