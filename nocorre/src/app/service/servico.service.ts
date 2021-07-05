import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Servico } from '../model/servico';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')||'')
  }

  

  getAllservicos(): Observable<Servico[]> {
    return this.http.get<Servico[]>(`${environment.server}/cadastro`)
  }

  getByIdServico(id: number): Observable<Servico>{
    return this.http.get<Servico>(`${environment.server}/cadastro/${id}`)
  }

  getByTituloServico(titulo: string): Observable<Servico[]>{
    return this.http.get<Servico[]>(`http://localhost:3000/api/ccadastro/titulo/${titulo}`)
  }

  postServico(servico: Servico): Observable<Servico>{
    return this.http.post<Servico>(`${environment.server}/cadastro`, servico)
  }

  putServico(servico: Servico): Observable<Servico>{
    return this.http.put<Servico>(`${environment.server}/cadastro`, servico)
  }

  deleteServico(id: number){
    return this.http.delete(`${environment.server}/cadastro/${id}`)
  }
  

}

