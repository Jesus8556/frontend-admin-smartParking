import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClient} from '@angular/common/http';
import { HttpClientModule} from '@angular/common/http';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { NavComponent } from './components/dashboard/nav/nav.component';
import { SideComponent } from './components/dashboard/side/side.component';
import { NivelesComponent } from './components/niveles/niveles.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EmpresasComponent,
    NavComponent,
    SideComponent,
    NivelesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
