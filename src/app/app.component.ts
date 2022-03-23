import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practica-libreta-dir';
  usuariosele:any;
  
  seleccionausuario(usuario:any){
    this.usuariosele=usuario;
  }
}
