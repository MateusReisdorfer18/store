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
import { CaixaDetalheComponent } from './components/caixa/caixa-detalhe/caixa-detalhe.component';
import { PedidosListaComponent } from './components/pedidos/pedidos-lista/pedidos-lista.component';
import { PedidosFormComponent } from './components/pedidos/pedidos-form/pedidos-form.component';
import { PedidosDetalheComponent } from './components/pedidos/pedidos-detalhe/pedidos-detalhe.component';

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
  {path: "caixa/:id", component: CaixaDetalheComponent},
  {path: "pedidos", component: PedidosListaComponent},
  {path: "pedido/cadastrar", component: PedidosFormComponent},
  {path: "pedido/alterar/:id", component: PedidosFormComponent},
  {path: "pedido/:id", component: PedidosDetalheComponent},
  {path: "", redirectTo: "produtos", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
