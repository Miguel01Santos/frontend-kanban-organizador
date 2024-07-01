import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { BoardCenterComponent } from './home/board-center/board-center.component';
import { NavegComponent } from './home/naveg/naveg.component';
import { AddCardComponent } from './components/add-card/add-card.component';
import { KanbanComponent } from './components/kanban/kanban.component';
import { LoginComponent } from './logins/login/login.component';
import { TitleComponent } from './logins/title/title.component';
import { CadastroComponent } from './logins/cadastro/cadastro.component';
import { CardsService } from './services/cards.service';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BoardCenterComponent,
    NavegComponent,
    AddCardComponent,
    LoginComponent,
    KanbanComponent,
    TitleComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
