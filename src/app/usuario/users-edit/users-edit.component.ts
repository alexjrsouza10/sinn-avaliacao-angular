import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {

  form: FormGroup;
  description: string;

  displayedColumns = ['Id', 'Avatar', 'Nome'];
  usersEdit = new MatTableDataSource();
  msgTexto;
  alertaMensagem;
  msgVisible;
  result;
  usuario = new MatTableDataSource();

  constructor(private userService: UsuarioService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UsersEditComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.result = data;
  }

  ngOnInit() {
    this.getUsersId(this.result);
    this.form = this.fb.group({
      description: [this.description, []]
    });
  }

  getUsersId(codigo) {
    this.userService.getUsersId(codigo).subscribe(res => {
      this.usuario = res.data;
    }
    )
  }
  update(element) {
    this.userService.updateUsers(element).subscribe(result => {
      this.dialogRef.close(this.usuario);
    },
      error => {
        this.dialogRef.close(this.usuario);
      }
    )
  }
  closed(){
    this.dialogRef.close();
  }
}
