import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent{

  @Input () entrada_mapa:any;

  direccion:any;
  cod_postal:any;
  poblacion:any;
  provincia:any;

    entradamapa(){
      this.entrada_mapa.direccion=this.direccion;
      this.entrada_mapa.codigo_postal=this.cod_postal;
      this.entrada_mapa.poblacion=this.poblacion;
      this.entrada_mapa.direccion=this.provincia;
    }

  constructor() { }

  ngOnInit(): void {

  }

}
