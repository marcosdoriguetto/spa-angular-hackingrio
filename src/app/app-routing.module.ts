import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CpfComponent } from './viwes/cpf/cpf.component'
import { CnpjComponent } from './viwes/cnpj/cnpj.component'

const routes: Routes = [
  {
    path: "",
    component: CpfComponent
  },
  {
    path: "cnpj",
    component: CnpjComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
