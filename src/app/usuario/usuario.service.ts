import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient) {}

  public getUsers = () => {
    return this.http.get<any>(environment.urlAddress + "/users");
  }
  public getUsersId = (codigo) => {
    return this.http.get<any>(environment.urlAddress + "/users/" + codigo);
  }
  public saveUsers = (Users) => {
    return this.http.post<any>(environment.urlAddress + "/users", Users);
  }
  public updateUsers = (Users) => {
    return this.http.put<any>(environment.urlAddress + "/users", Users);
  }
  public deleteUsers = (codigo) => {
    return this.http.delete<any>(environment.urlAddress + "/users/" + codigo);
  }
}
  