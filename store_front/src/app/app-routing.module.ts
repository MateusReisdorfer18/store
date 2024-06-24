import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListaComponent } from './components/produto/produto-lista/produto-lista.component';
import { ProdutoFormComponent } from './components/produto/produto-form/produto-form.component';
import { ProdutoDetalheComponent } from './components/produto/produto-detalhe/produto-detalhe.component';
import { CategoriaListaComponent } from './components/categoria/categoria-lista/categoria-lista.component';
import { CategoriaFormComponent } from './components/categoria/categoria-form/categoria-form.component';
import { CategoriaDetalheComponent } from './components/categoria/categoria-detalhe/categoria-detalhe.component';
import { ClienteListaComponent } from './components/cliente/cliente-lista/cliente-lista.component';
import { ClienteFormComponent } from './components/cliente/cliente-form/cliente-form.component';
import { ClienteDetalheComponent } from './components/cliente/cliente-detalhe/cliente-detalhe.component';
import { CaixaListaComponent } from './components/caixa/caixa-lista/caixa-lista.component';
import { CaixaFormComponent } from './components/caixa/caixa-form/caixa-form.component';
import { CaixaDetalheComponent } from './components/caixa/caixa-detalhe/caixa-detalhe.component';

const routes: Routes = [
  {path: "produtos", component: ProdutoListaComponent},
  {path: "produto/cadastrar", component: ProdutoFormComponent},
  {path: "produto/alterar/:id", component: ProdutoFormComponent},
  {path: "produto/:id", component: ProdutoDetalheComponent},
  {path: "categorias", component: CategoriaListaComponent},
  {path: "categoria/cadastrar", component: CategoriaFormComponent},
  {path: "categoria/alterar/:id", component: CategoriaFormComponent},
  {path: "categoria/:id", component: CategoriaDetalheComponent},
  {path: "clientes", component: ClienteListaComponent},
  {path: "cliente/cadastrar", component: ClienteFormComponent},
  {path: "cliente/alterar/:id", component: ClienteFormComponent},
  {path: "cliente/:id", component: ClienteDetalheComponent},
  {path: "caixas", component: CaixaListaComponent},
  {path: "caixa/cadastrar", component: CaixaFormComponent},
  {path: "caixa/alterar/:id", component: CaixaFormComponent},
  {path: "caixa/:id", component: CaixaDetalheComponent},
  {path: "", redirectTo: "produtos", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
