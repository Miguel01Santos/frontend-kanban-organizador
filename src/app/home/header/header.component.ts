import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  username: string = 'Miguel Proveza dos Santos' //Importar do banco de dados o nome do usuario que estiver acessando

}
