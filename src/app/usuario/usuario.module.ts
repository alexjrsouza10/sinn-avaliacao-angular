import { NgModule, Optional, SkipSelf } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from '../app-routing.module';
import { throwIfAlreadyLoaded } from '../core/core-import-guard';
import { UsersComponent } from './users/users.component';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { MatToolbarModule, MatButtonModule, MatSortModule, MatPaginatorModule, MatDialogModule, MatSnackBarModule} from '@angular/material';
import { MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { NewUserComponent } from './new-user/new-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';



@NgModule({
  imports: [HttpClientModule, SharedModule, CommonModule, AppRoutingModule, AngularMaterialModule, MatTableModule, MatPaginatorModule ,MatSortModule, MatDialogModule, MatSnackBarModule],
  exports: [MatToolbarModule,MatButtonModule,MatSortModule, MatPaginatorModule, MatTableModule, MatDialogModule],
  declarations: [UsersComponent, UsersEditComponent, NewUserComponent, DeleteUserComponent],
  entryComponents: [UsersEditComponent, NewUserComponent, DeleteUserComponent]
})
export class UsuarioModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: UsuarioModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'UsuarioModule');
  }
}
