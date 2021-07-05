import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servico } from 'src/app/model/servico';
import { AlertasService } from 'src/app/service/alertas.service';
import { ServicoService } from 'src/app/service/servico.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-servico-delete',
  templateUrl: './servico-delete.component.html',
  styleUrls: ['./servico-delete.component.css']
})
export class ServicoDeleteComponent implements OnInit {
  servico: Servico = new Servico()
  idPost: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicoService: ServicoService,
    private alertas: AlertasService
    
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    
  }

  findByIdServico(id: number){
    this.servicoService.getByIdServico(id).subscribe((resp: Servico)=>{
      this.servico = resp
    })
  }

  apagar(){
    this.servicoService.deleteServico(this.idPost).subscribe(()=>{
      this.alertas.showAlertSuccess('Publicação apagada com sucesso!')
      this.router.navigate(['/cadastro'])
    })
  }

}
