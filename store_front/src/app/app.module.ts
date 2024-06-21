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

@NgModule({
  declarations: [
    AppComponent,
    ProdutoListaComponent,
    ProdutoDetalheComponent,
    ProdutoFormComponent,
    ProdutoAtributoComponent
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
