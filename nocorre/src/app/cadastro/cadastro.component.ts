import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Servico } from '../model/servico';
import { ServicoService } from '../service/servico.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    if(environment.token == ''){
        this.router.navigate(['/cadastro'])
    }

    window.scroll(0, 0)
  }
/* 
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
 



 */
} 