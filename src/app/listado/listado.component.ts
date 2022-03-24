import { Component, OnInit, Input ,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent{


@Input () usuariosdelpadreenlistado:any;
@Output () usuarioseleccionado:EventEmitter<any> = new EventEmitter;
seleccionausuario(index:any){
  this.usuarioseleccionado.emit(this.usuariosdelpadreenlistado[index]);
}
  constructor() {}

  ngOnInit(): void {}
}
