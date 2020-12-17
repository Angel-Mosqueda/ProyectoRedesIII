import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(
    private http: HttpClient
  ) { }

  cerrarSesion() {
    return this.http.get('/cerrar_sesion/');
  }

  //Una forma de crear el usuario
  createUser(payload: any, file?: File) {
    if (file) {
      let fd = new FormData();
      fd.append('file', file, file.name);
      fd.append('datos', JSON.stringify(payload));
      return this.http.post('/add_user/', fd);
    } else {
      return this.http.post('/add_user/', payload);
    }
  }

  ///////////// CRUD Usuarios
  //Obtener Usuarios
  getUsuarios() {
    return this.http.get('/get_usuarios/');
  }

  //Actualizar Usuarios
  updateUsuario(payload: any) {
    return this.http.post('/update_usuario/', payload);
  }

  //Otra forma de crear el usuario
  crearUsuario(payload: any) {
    return this.http.post('/create_usuario/', payload)
  }

  //Eliminar Usuarios
  eliminarUsuario(id: any) {
    return this.http.get('/delete_usuario/' + id);
  }

  ////////////////// CRUD Documento
  createDocumento(payload: any, file: File) {
    let fd = new FormData();
    fd.append('file', file, file.name);
    fd.append('datos', JSON.stringify(payload));
    return this.http.post('/add_documento/', fd);
  }

  //Eliminar Documentos
  eliminarDocumento(id: any) {
    return this.http.get('/delete_documento/' + id);
  }

  //Actualizar Documentos
  updateDocumento(id_doc: any) {
    return this.http.get('/upp_documento/' + id_doc);
  }

  //Obtener Documentos
  getDocumento() {
    return this.http.get('/get_documentos/');
  }

  

  ////////////////// CRUD Materias
  createMaterias(payload: any, file: File) {
    let fd = new FormData();
    fd.append('file', file, file.name);
    fd.append('datos', JSON.stringify(payload));
    return this.http.post('/add_materias/', fd);
  }
  

  //Eliminar Materias
  eliminarMateria(id: any) {
    return this.http.get('/delete_materia/' + id);
  }

  //Actualizar Materias
  updateMateria(id_doc: any) {
    return this.http.get('/upp_materia/' + id_doc);
  }

  //Obtener Materias
  getMateria() {
    return this.http.get('/get_materia/');
  }

}
