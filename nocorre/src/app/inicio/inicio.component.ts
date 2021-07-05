import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Servico } from '../model/servico';
import { ServicoService } from '../service/servico.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  servico: Servico = new Servico();
  listaServico: Servico[]

  constructor(
    private http: HttpClient,
    private router: Router,
    private servicoService: ServicoService,

  ) { }

  ngOnInit(): void {
  
  }
  getAllServicos(): Observable<Servico[]> {
    return this.http.get<Servico[]>(`${environment.server}/cadastro`)
  }

  getByIdServico(id: number): Observable<Servico>{
    return this.http.get<Servico>(`${environment.server}/cadastro/${id}`)
  }

  getByTituloServico(titulo: string): Observable<Servico[]>{
    return this.http.get<Servico[]>(`http://localhost:3000/cadastro/titulo/${titulo}`)
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
 


cadastrar(){
   this.servico
  this.servicoService.postServico(this.servico).subscribe((resp: Servico) => {
    this.servico = resp
    alert('Serviço cadastrado com sucesso!')
    this.servico = new Servico()
  })

 }
}
