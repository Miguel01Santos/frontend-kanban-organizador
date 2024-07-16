import { Component } from '@angular/core';
import { Cadastro } from '../login/interfaces';
import { CadastroService } from '../../services/cadastros/cadastro.service';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrl: './cadastros.component.css'
})
export class CadastrosComponent {

  //armazena os valores digitados nos inputs da tela de cadastro, que seram usados para cadastrar um novo usuario.
  newuser: Cadastro = {
    newusername: '',
    newpassword: ''
  };

  constructor(private cadastroService: CadastroService){}

  ngOnInit(): void{}

  cadastrarUsuario(): void{

    console.log('Tentativa de cadastro',this.newuser)
    // Chama o método cadastroUsuario do serviço cadastroService, passando o objeto user como argumento.
    this.cadastroService.cadastrarUsuario(this.newuser)

  }
}
