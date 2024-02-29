import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
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
    this.userService.obterUsuarioPorId(this.id).subscribe((result: any) => {
      this.formGroup.patchValue(result);
    })
  }

  submit() {
    throw new Error('Method not implemented.');
  }

}
