import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PerfilComponent } from './components/pages/perfil/perfil.component';
import { AdminComponent } from './components/pages/avaliacoes/admin/admin.component';
import { ColaboradorComponent } from './components/pages/avaliacoes/colaborador/colaborador.component';
import { ColaboradoresComponent } from './components/pages/colaboradores/colaboradores.component';
import { CadastroColaboradoresComponent } from './components/pages/colaboradores/cadastro-colaboradores/cadastro-colaboradores.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        PerfilComponent,
        AdminComponent,
        ColaboradorComponent,
        ColaboradoresComponent,
        CadastroColaboradoresComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgbModule
    ]
})
export class AppModule {}
