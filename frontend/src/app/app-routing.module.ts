import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PerfilComponent } from './components/pages/perfil/perfil.component';
import { AdminComponent } from './components/pages/avaliacoes/admin/admin.component';
import { ColaboradorComponent } from './components/pages/avaliacoes/colaborador/colaborador.component';
import { ColaboradoresComponent } from './components/pages/colaboradores/colaboradores.component';
import { CadastroColaboradoresComponent } from './components/pages/colaboradores/cadastro-colaboradores/cadastro-colaboradores.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'colaborador', component: ColaboradorComponent },
  { path: 'colaboradores', component: ColaboradoresComponent },
  { path: 'cadastroColaborador', component: CadastroColaboradoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
