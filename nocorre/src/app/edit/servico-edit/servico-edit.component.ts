import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servico } from 'src/app/model/servico';
import { AlertasService } from 'src/app/service/alertas.service';
import { ServicoService } from 'src/app/service/servico.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-servico-edit',
  templateUrl: './servico-edit.component.html',
  styleUrls: ['./servico-edit.component.css']
})
export class ServicoEditComponent implements OnInit {

  servico: Servico = new Servico()

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicoService: ServicoService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {

    window.scroll(0,0)

    let id = this.route.snapshot.params['id']
    this.findByIdServico(id)
  }

  findByIdServico(id: number){
    this.servicoService.getByIdServico(id).subscribe((resp: Servico)=>{
      this.servico = resp
    })
  }


}