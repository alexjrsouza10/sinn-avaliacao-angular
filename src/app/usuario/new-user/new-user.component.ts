import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  form: FormGroup;
  description: string;
  result;
  usuario = [];
  first_name;
  last_name;
  msgTexto;
  alertaMensagem;
  msgVisible;

  constructor(private userService: UsuarioService, private fb: FormBuilder, private dialogRef: MatDialogRef<NewUserComponent>) {}

  salvar() {
   this.userService.saveUsers(this.usuario).subscribe(result =>{
    this.dialogRef.close(this.usuario);
    },
    error => {
      this.dialogRef.close();
    });
  }

  closed(){
    this.dialogRef.close();
  }
  ngOnInit() {
    this.form = this.fb.group({
      description: [this.description, []]
    });
  }

}
