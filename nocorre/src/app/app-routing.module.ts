import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ServicoEditComponent } from './edit/servico-edit/servico-edit.component';
import { SobreComponent } from './sobre/sobre.component';
import { ServicosComponent } from './servico/servico.component';
import { ServicoDeleteComponent } from './delete/servico-delete/servico-delete.component';
import { InicioComponent } from './inicio/inicio.component';




const routes: Routes = [
  {path: '', redirectTo: 'cadastro', pathMatch: 'full'},

 {path: 'cadastro', component: CadastroComponent},
 {path: 'servico-edit/:id', component: ServicoEditComponent},
 {path: 'servico-delete/:id', component: ServicoDeleteComponent},
 {path: 'sobre', component: SobreComponent},
 {path:'servicos', component: ServicosComponent},
 {path:'inicio', component: InicioComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
