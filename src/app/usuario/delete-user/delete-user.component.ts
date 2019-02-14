import { Component, OnInit, Inject } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  form: FormGroup;
  description: string;
  usuario;
  msgTexto;
  alertaMensagem;
  msgVisible;

  constructor(private userService: UsuarioService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DeleteUserComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.usuario = data;
  }

  ngOnInit() {
    this.form = this.fb.group({
      description: [this.description, []]
    });
  }

  delete(codigo){
    this.userService.deleteUsers(codigo).subscribe(result =>{
      this.dialogRef.close(this.usuario);
    },
      error => {
        this.dialogRef.close();
      }
    )
  }

  closed(){
    this.dialogRef.close();
  }
}
