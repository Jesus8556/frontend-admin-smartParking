import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { loginGuard } from './guards/login.guard';
import { NivelesComponent } from './components/niveles/niveles.component';
import { ParkingComponent } from './components/parking/parking.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"users", component:UsersComponent},
  {path:"empresas",component: EmpresasComponent},
  {path:"niveles/:id", component: NivelesComponent},
  {path:"parking/:id", component: ParkingComponent},
  {path: "", redirectTo: '/login' , pathMatch : "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
