import { TareaCardItem } from './../models/tarea-card-item.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from '../models/tarea.model';
import { TareaStatus } from '../enum/tarea-status.enum';
@Component({
  selector: 'app-tarea-card',
  templateUrl: './tarea-card.component.html',
  styleUrls: []
})
export class TareaCardComponent {
  @Input()
  tarea!: Tarea;
  @Input()
  indice: number = -1;

  @Output("onStatusChange") emitter: EventEmitter<TareaCardItem>;


  tareaStatus = {
    Completado: TareaStatus.Completado,
    Retasado: TareaStatus.Retrasado,
    Pendiente: TareaStatus.Pendiente
  }

  constructor() {
      this.emitter = new EventEmitter();
  }


  cambiarStatus(status:TareaStatus): void {
      this.tarea.status = status;

      this.emitter.emit({
          indice: this.indice,
          tarea: this.tarea
      });
  }
}
