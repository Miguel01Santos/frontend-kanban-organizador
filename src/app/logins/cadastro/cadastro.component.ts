import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent{
  @Input() btnText!: string;

  userForm!: FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  get name(){
    return this.userForm.get('name')!;
  }
  get email(){
    return this.userForm.get('email')!;
  }
  get password(){
    return this.userForm.get('password')!;
  }

  submit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }



}
