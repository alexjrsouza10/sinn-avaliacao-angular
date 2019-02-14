import { slideInDownAnimation } from './../../shared/animations';
import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialogConfig, MatSnackBar } from '@angular/material';
import { UsuarioService } from '../usuario.service';
import { MatDialog } from '@angular/material';
import { UsersEditComponent } from '../users-edit/users-edit.component';
import { NewUserComponent } from '../new-user/new-user.component';
import { DeleteUserComponent } from '../delete-user/delete-user.component';

@Component({
  selector: 'users-main',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [slideInDownAnimation]
})
export class UsersComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns = ['Avatar', 'Nome', 'Editar', 'Excluir'];
  usuarios = new MatTableDataSource();
  msgTexto;
  alertaMensagem;
  msgVisible;
  result;

  constructor(private userService: UsuarioService, private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.usuarios.sort = this.sort;
    this.usuarios.paginator = this.paginator;
    this.getUsers();
  }

  openSnackBar(message: string) {
    this.snackBar.open(message,'', {
      duration: 4000,
    });
  }


  public getUsers = () => {
    this.userService.getUsers()
      .subscribe(res => {
        this.usuarios = res.data;
      }
      )
  }
  openNew() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";

    this.dialog.open(NewUserComponent, dialogConfig)
    const dialogRef = this.dialog.open(NewUserComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if (data != undefined || data != null) {
        this.dialog.closeAll();
        this.openSnackBar("Salvo com Sucesso");
      } else {
        this.dialog.closeAll();
      }
    })
  }

  openEdit(element) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data = element.id;

    this.dialog.open(UsersEditComponent, dialogConfig);
    const dialogRef = this.dialog.open(UsersEditComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data != undefined || data != null) {
          this.dialog.closeAll();
          this.openSnackBar("Alteração Salva com Sucesso");
        } else {
          this.dialog.closeAll();
        }
    })
  }

  delete(element) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";

    dialogConfig.data = element;
    this.dialog.open(DeleteUserComponent, dialogConfig)

    const dialogRef = this.dialog.open(DeleteUserComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data != undefined || data != null) {
          this.dialog.closeAll();
          this.openSnackBar("Excluído com sucesso")
        } else {
          this.dialog.closeAll();
        }
      }
    )
  }
}

