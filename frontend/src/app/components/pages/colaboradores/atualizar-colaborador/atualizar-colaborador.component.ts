import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { IUsuarioEntity } from 'src/app/interfaces/IUsuarioEntity';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-atualizar-colaborador',
  templateUrl: './atualizar-colaborador.component.html',
  styleUrls: ['./atualizar-colaborador.component.css']
})
export class AtualizarColaboradorComponent {
  public usuarioFormGroup: any;
  public id: string = `0`;

  public constructor(
    private formBuilder: FormBuilder,
    private userService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.usuarioFormGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      telefone: ['', Validators.required],
      endereco: ['', Validators.required],
      funcao: ['', Validators.required],
      status: ['', Validators.required],
    });

    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      if (!!param.get(`id`)) { 
        this.id = param.get(`id`) || '0';
        this.initUpdate();
      }
    });
  }

  private initUpdate() {
    this.userService.obterUsuarioPorId(this.id).subscribe(
      (result: any) => {
        this.usuarioFormGroup.patchValue(result);
      },
      (error) => {
        console.error(error);
      });
  }

  isResponseOk = false;
  isResponseError = false;

  public submit() {
    if (!this.usuarioFormGroup.valid){
      alert('Necessário preencher todos os campos!');
      return;
    }

    const usuarioPayload: IUsuarioEntity = {
      id: this.id,
      nome: this.usuarioFormGroup.controls["nome"].value,
      email: this.usuarioFormGroup.controls["email"].value,
      senha: this.usuarioFormGroup.controls["senha"].value,
      telefone: this.usuarioFormGroup.controls["telefone"].value,
      endereco: this.usuarioFormGroup.controls["endereco"].value,
      status: this.usuarioFormGroup.controls["status"].value,
      funcao: this.usuarioFormGroup.controls["funcao"].value,
    }

    this.userService.atualizarUsuario(usuarioPayload).subscribe(
      (result) => {
        console.log('Usuário atualizado com sucesso! ', result);
        this.isResponseOk = true;
        this.isResponseError = false;
      },
      (error) => {
        console.error('Ocorreu um erro ao atualizar o usuário: ', error);
        this.isResponseOk = false;
        this.isResponseError = true;
      }
    )
  }

}
