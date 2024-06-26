import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoListaComponent } from './components/produto/produto-lista/produto-lista.component';
import { ProdutoDetalheComponent } from './components/produto/produto-detalhe/produto-detalhe.component';
import { ProdutoFormComponent } from './components/produto/produto-form/produto-form.component';
import { ProdutoAtributoComponent } from './components/produto/produto-atributo/produto-atributo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaListaComponent } from './components/categoria/categoria-lista/categoria-lista.component';
import { CategoriaFormComponent } from './components/categoria/categoria-form/categoria-form.component';
import { CategoriaDetalheComponent } from './components/categoria/categoria-detalhe/categoria-detalhe.component';
import { CategoriaAtributoComponent } from './components/categoria/categoria-atributo/categoria-atributo.component';
import { ClienteListaComponent } from './components/cliente/cliente-lista/cliente-lista.component';
import { ClienteFormComponent } from './components/cliente/cliente-form/cliente-form.component';
import { ClienteDetalheComponent } from './components/cliente/cliente-detalhe/cliente-detalhe.component';
import { ClienteAtributoComponent } from './components/cliente/cliente-atributo/cliente-atributo.component';
import { CaixaListaComponent } from './components/caixa/caixa-lista/caixa-lista.component';
import { CaixaAtributoComponent } from './components/caixa/caixa-atributo/caixa-atributo.component';
import { CaixaDetalheComponent } from './components/caixa/caixa-detalhe/caixa-detalhe.component';
import { PedidosListaComponent } from './components/pedidos/pedidos-lista/pedidos-lista.component';
import { PedidosDetalheComponent } from './components/pedidos/pedidos-detalhe/pedidos-detalhe.component';
import { PedidosAtributoComponent } from './components/pedidos/pedidos-atributo/pedidos-atributo.component';
import { PedidosFormComponent } from './components/pedidos/pedidos-form/pedidos-form.component';
import { ProdutosPedidoListaComponent } from './components/produtos-pedido/produtos-pedido-lista/produtos-pedido-lista.component';
import { ProdutosPedidoFormComponent } from './components/produtos-pedido/produtos-pedido-form/produtos-pedido-form.component';
import { CaixaPedidosListaComponent } from './components/caixa/caixa-pedidos-lista/caixa-pedidos-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoListaComponent,
    ProdutoDetalheComponent,
    ProdutoFormComponent,
    ProdutoAtributoComponent,
    CategoriaListaComponent,
    CategoriaFormComponent,
    CategoriaDetalheComponent,
    CategoriaAtributoComponent,
    ClienteListaComponent,
    ClienteFormComponent,
    ClienteDetalheComponent,
    ClienteAtributoComponent,
    CaixaListaComponent,
    CaixaAtributoComponent,
    CaixaDetalheComponent,
    PedidosListaComponent,
    PedidosDetalheComponent,
    PedidosAtributoComponent,
    PedidosFormComponent,
    ProdutosPedidoListaComponent,
    ProdutosPedidoFormComponent,
    CaixaPedidosListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
