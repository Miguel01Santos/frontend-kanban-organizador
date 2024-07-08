import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../../logins/login/interfaces';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { Cadastro } from '../../logins/login/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private autentication: boolean = false; // autenticador com valor negativo = acesso negado
  private apiUrl: string = 'http://localhost:3000/auth/register'; // URL do servidor ultilizado

  //chamando Router e httpClient para utilização dentro da validação do usuário, router guiara o usuário para a próxima tela caso seja autenticado, e httpClient fara a requisição da validação para o servidor utilizado . 
  constructor(private router: Router, private http: HttpClient) { }

  cadastrarUsuario(cadastro: Cadastro): void {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })

    this.http.post<{ token: string }>(this.apiUrl, cadastro, { headers })
      .pipe(
        map(response => {
          this.autentication = true; //resposta de autenticação recebe valor positivo = acesso liberado
          this.router.navigate(['/']); //encaminha o usuario para a home page.
          localStorage.setItem('token', response.token); //armazena o token de segurança no localstorage
        }),
        catchError(error => {
          this.autentication = false; //resposta de autenticação recebe valor negativo = acesso negado
          console.error('Erro ao cadastrar novo usuário', error); //console acusa mensagem de erro
          throw error;
        })
      )
      .subscribe();
  }

}
