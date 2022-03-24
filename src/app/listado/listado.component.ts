import { Component, OnInit, Input ,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent{


@Input () usuariosdelpadreenlistado:any;
@Input () usuarios_para_mandar:any;
@Output () usuarioseleccionado:EventEmitter<any> = new EventEmitter;
@Output () usuarioseleccionado_apoyo:EventEmitter<any> = new EventEmitter;
posicion_del_json:any;
seleccionausuario(index:any){
  this.usuarioseleccionado.emit(this.usuarios_para_mandar[index]);
}
rescatarPosicion(index:any){
  this.posicion_del_json=index;
  this.usuarioseleccionado_apoyo.emit(this.posicion_del_json);
}
}
