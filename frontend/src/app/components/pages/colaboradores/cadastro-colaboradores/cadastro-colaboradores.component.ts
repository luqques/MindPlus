import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUsuarioEntity } from 'src/app/interfaces/IUsuarioEntity';
import { EmpresaService } from 'src/app/services/empresa/empresa.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';


@Component({
  selector: 'app-cadastro-colaboradores',
  templateUrl: './cadastro-colaboradores.component.html',
  styleUrls: ['./cadastro-colaboradores.component.css']
})

export class CadastroColaboradoresComponent implements OnInit{

  usuarioData!: IUsuarioEntity;
  usuarioFormGroup!: FormGroup;
  empresaId!: number;

  constructor(
    private localStorageService: LocalStorageService,
    private usuarioService: UsuarioService,
    private empresaService: EmpresaService,
    private formBuilder: FormBuilder
  ) {
    this.usuarioFormGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      endereco: ['', Validators.required],
      funcao: ['', Validators.required],
      status: ['ativo', Validators.required]
    });
  }

  ngOnInit(): void {
    this.usuarioData = this.localStorageService.get('usuarioData')
    this.empresaService.obterEmpresaPorId(this.usuarioData.id).subscribe(empresaEntityResponse => {
      this.usuarioFormGroup.patchValue({empresaNome: empresaEntityResponse.nome})
      this.empresaId = empresaEntityResponse.id;
    })
  }

  isResponseOk = false;
  isResponseError = false;

  onSubmit() {
    // if (this.usuarioFormGroup.valid) {
      
      const usuarioData: any = {
        nome: this.usuarioFormGroup.controls["nome"].value,
        email: this.usuarioFormGroup.controls["email"].value,
        senha: this.usuarioFormGroup.controls["senha"].value,
        telefone: this.usuarioFormGroup.controls["telefone"].value,
        endereco: this.usuarioFormGroup.controls["endereco"].value,
        empresaId: this.empresaId,
        status: 'ativo',
        funcao: this.usuarioFormGroup.controls["funcao"].value
      }
    // }
  } 
}
