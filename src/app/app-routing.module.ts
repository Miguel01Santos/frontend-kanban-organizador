import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './logins/login/login.component';
import { KanbanComponent } from './components/kanban/kanban.component';
import { CadastrosComponent } from './logins/cadastros/cadastros.component';



const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'home', component: HomeComponent},
  {path: 'kanban', component: KanbanComponent},
  {path: 'cadastros', component: CadastrosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
