import { Component, Input, OnInit , Output,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.scss']
})
export class BotoneraComponent implements OnInit {
@Output () salidaboton:EventEmitter<any> = new EventEmitter;
presionoboton(tipo:string){
  switch (tipo){
    case "crear":
      return this.salidaboton.emit(tipo);
    case "modificar":
      return this.salidaboton.emit(tipo);
    case "borrar":
      return this.salidaboton.emit(tipo);
    default:
      return "¿?"
  }
}

  ngOnInit(): void {
  }

}
