import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { IUsuarioEntity } from 'src/app/interfaces/IUsuarioEntity';
import { EmpresaService } from 'src/app/services/empresa/empresa.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {
  
  usuarioData!: IUsuarioEntity;
  usuarioFormGroup!: FormGroup;
  nomeControl!: FormControl;

  constructor(
    private localStorageService: LocalStorageService,
    private usuarioService: UsuarioService,
    private empresaService: EmpresaService, 
    private formBuilder: FormBuilder
    ) {
    this.usuarioFormGroup = this.formBuilder.group(
      {
        id: 0,
        nome: ['', Validators.required],
        email: ['', Validators.required],
        senha: '',
        telefone: ['', Validators.required],
        endereco: ['', Validators.required],
        empresaNome: ['', Validators.required],
        status: ['', Validators.required],
        funcao: ['', Validators.required],
      }
    );
  }  

  ngOnInit(): void {
    this.usuarioData = this.localStorageService.get('usuarioData');
    
    this.usuarioService.obterUsuarioPorId(this.usuarioData.id).subscribe(usuarioEntityResponse => {
      this.usuarioFormGroup.patchValue(usuarioEntityResponse);
    });

    this.empresaService.obterEmpresaPorId(this.usuarioData.empresaId).subscribe(empresaEntityResponse => {
      this.usuarioFormGroup.patchValue({empresaNome: empresaEntityResponse.nome});
    })
  }

  submit() {
    if (this.usuarioFormGroup.valid) {
      console.log(this.usuarioFormGroup.controls["nome, email"].value);

      this.usuarioService.atualizarUsuario(this.usuarioFormGroup.controls['id, nome, email, senha, telefone, endereco, empresaId, status, funcao'].value).subscribe(responseMessage => console.log(responseMessage));
    } else {
      alert('Necessário preencher todos os campos!')
    }
  }
}
