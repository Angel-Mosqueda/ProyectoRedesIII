import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import firebase from 'firebase/app'
import { Globals } from '../interface/globals.interface';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  globals: Globals;
  private documentsCollection: AngularFirestoreCollection<any>;
  public documents: any[] = [];
  public usuario: any = {};
  email: string = 'px1000.mb@gmail.com';
  correo: string;
  contrasena: string;
  logueado = null;
  constructor(private afs: AngularFirestore,
    public _afAuth: AngularFireAuth,
    private _router: Router,
    globals: Globals) {
    this.globals = globals;
    this._afAuth.authState.subscribe(user => {
      console.log('Estado del Usuario: ', user, user.email);
      if (!user) {
        return;
      }
      this.globals.nombre = user.displayName;
      this.globals.uid = user.uid;
      this.globals.email = user.email;
    });
  }
  

  login() {
    return this._afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    return this._afAuth.signOut();
  }


  obtenerDocumentos() {
    this.documentsCollection = this.afs.collection<any>('Usuarios/' + this.globals.email + '/Archivos');
    //return this.documentsCollection.valueChanges();
    return this.documentsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data }
      }))
    )

  }

  agregarDocumento(document: any) {
    this.documentsCollection = this.afs.collection<any>('Usuarios/' + this.globals.email + '/Archivos');
    return this.documentsCollection.add(document);
  }

  eliminarDocumento(id: string) {
    this.documentsCollection = this.afs.collection<any>('Usuarios/' + this.globals.email + '/Archivos');
    return this.documentsCollection.doc(id).delete();
  }

  modificarDocumento(document: any){
    this.documentsCollection = this.afs.collection<any>('Usuarios/' + this.globals.email + '/Archivos');
    return this.documentsCollection.doc(document.id).update(document);
  }
  /*
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
  */
}
