import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';
import {DialogComponent} from './dialog/dialog.component';

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { NgcMenuComponent } from './ngc-menu/ngc-menu.component';
import { NgcConteudoComponent } from './ngc-conteudo/ngc-conteudo.component';
import { NgcHeaderComponent } from './ngc-header/ngc-header.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { NgcInputComponent } from './ngc-input/ngc-input.component';


const appRoutes: Routes = [
  { path: 'pessoa', component: PessoaComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    MenuComponent,
    NgcMenuComponent,
    NgcConteudoComponent,
    NgcHeaderComponent,
    PessoaComponent,
    NgcInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
