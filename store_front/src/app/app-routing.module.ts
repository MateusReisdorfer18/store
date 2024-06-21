import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListaComponent } from './components/produto/produto-lista/produto-lista.component';
import { ProdutoFormComponent } from './components/produto/produto-form/produto-form.component';
import { ProdutoDetalheComponent } from './components/produto/produto-detalhe/produto-detalhe.component';

const routes: Routes = [
  {path: "produtos", component: ProdutoListaComponent},
  {path: "produto/cadastrar", component: ProdutoFormComponent},
  {path: "produto/alterar/:id", component: ProdutoFormComponent},
  {path: "produto/:id", component:ProdutoDetalheComponent},
  {path: "", redirectTo: "produtos", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
