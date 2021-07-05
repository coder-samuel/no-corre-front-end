import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Servico } from '../model/servico';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})

export class ServicosComponent  {
 

  constructor(private http: HttpClient) { }


  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')||'')
  }

  

  getAllservicos(): Observable<Servico[]> {
    return this.http.get<Servico[]>(`${environment.server}/cadastro`, this.token)
  }

  getByIdServico(id: number): Observable<Servico>{
    return this.http.get<Servico>(`${environment.server}/cadastro/${id}`, this.token)
  }

  getByTituloServico(titulo: string): Observable<Servico[]>{
    return this.http.get<Servico[]>(`http://localhost:3000/cadastro/titulo/${titulo}`, this.token)
  }

  postServico(servico: Servico): Observable<Servico>{
    return this.http.post<Servico>(`${environment.server}/cadastro`, servico, this.token)
  }

  putServico(servico: Servico): Observable<Servico>{
    return this.http.put<Servico>(`${environment.server}/cadastro`, servico, this.token)
  }

  deleteServico(id: number){
    return this.http.delete(`${environment.server}/cadastro/${id}`, this.token)
  }
  

}

