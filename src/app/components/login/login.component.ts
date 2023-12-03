import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formulario : FormGroup
  usersService = inject(UsersService)
  router = inject(Router)
  constructor(){
    //Peticiones del formulario
    this.formulario = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  async onSubmit(){
    const response = await this.usersService.login(this.formulario.value)
    if (!response.error){
      console.log(response)
      this.router.navigate(['/empresas']) 
    }
    
  }
}
