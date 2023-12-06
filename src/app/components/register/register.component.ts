import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
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
    const response = await this.usersService.register(this.formulario.value)
    console.log(response);
    this.router.navigate(['/'])

  }
}
