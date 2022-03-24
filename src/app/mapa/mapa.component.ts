import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent{

  @Input () usuario_mapa:any;
  @Input () datos_de_apoyo:any;
  

}
