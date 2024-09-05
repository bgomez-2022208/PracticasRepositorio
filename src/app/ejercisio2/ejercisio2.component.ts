import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, SimpleChanges } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercisio',
  templateUrl: './ejercisio2.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./ejercisio2.component.css']
})
export class Ejercisio2Component implements OnInit, OnDestroy {
  @Input() initialParam: string = '';
  updateParam: string = '';
  private timeoutId: any;
  ngOnDestroy(): void {
    console.log('ngOnDestroy tengo duda en esta parte porque no se si los aplique correctamente');
  }

  ngOnInit(): void {
    this.updateParam = this.initialParam;


    setTimeout(() => {
      this.updateParam = 'PruebaDSJAJs';
    }, 30000);
  }
}

