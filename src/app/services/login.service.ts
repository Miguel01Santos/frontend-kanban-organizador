import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../logins/login/interfaces';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private autentication: boolean = false; // autenticador com valor negativo = acesso negado
  private apiUrl: string = 'http://localhost:3000/user/login'; // URL do servidor ultilizado

  //chamando Router e httpClient para utilização dentro da validação do usuário, router guiara o usuário para a próxima tela caso seja autenticado, e httpClient fara a requisição da validação para o servidor utilizado . 
  constructor(private router: Router, private http: HttpClient) { }

  async fazerlogin(usuario: Usuario): Promise<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    this.http.post<{ access_token: string }>(this.apiUrl, usuario, { headers })
      .pipe(
        tap(response => {
          this.autentication = true; //resposta de autenticação recebe valor positivo = acesso liberado
          this.router.navigate(['/home']); //encaminha o usuario para a home page.
          localStorage.setItem('token', response.access_token); //armazena o token de segurança no localstorage 
        }),
        catchError(error => {
          console.log('Backend não recebeu API')
          this.autentication = false; //resposta de autenticação recebe valor negativo = acesso negado
          console.error('Usuário desconhecido', error); //console acusa mensagem de erro
          throw error;
        })
      )
      .subscribe();
  }
}
