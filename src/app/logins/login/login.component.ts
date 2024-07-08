import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Usuario } from './interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  //armazena os valores digitados nos inputs da tela de login, que seram usados para validação do usuário
  user: Usuario = {
    username: '',
    password: ''
  };

  //chamando a classe LoginSerice do serviço Login.Service.ts .
  constructor(private loginService: LoginService){}

  ngOnInit(): void{}

  fazerLogin(): void{
    console.log(this.user)
    // Chama o método fazerlogin do serviço loginService, passando o objeto user como argumento.
    this.loginService.fazerlogin(this.user)
  }

}
