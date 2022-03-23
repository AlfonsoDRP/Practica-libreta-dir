import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contenido-datos',
  templateUrl: './contenido-datos.component.html',
  styleUrls: ['./contenido-datos.component.scss']
})
export class ContenidoDatosComponent{

  @Input () usuariodelpadre:any;

  prueba(){
    console.log(this.usuariodelpadre);
  }

}
