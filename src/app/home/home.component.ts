import {Component, OnInit, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, Input, SimpleChanges} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  inputControl = new FormControl('');
  private subscription: Subscription | undefined;

  constructor() {
    console.log('Constructor llamado');
  }

  ngOnInit() {
    this.subscription = this.inputControl.valueChanges.subscribe(value => {
      console.log('Valor actual:', value);
    });
    console.log('ngOnInit llamado');
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    console.log('ngOnDestroy llamado');
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['inputValue']) {
      const currentValue = changes['inputValue'].currentValue;
      const previousValue = changes['inputValue'].previousValue;
      console.log(`inputValue cambió de ${previousValue} a ${currentValue}`);
    }
    console.log('ngOnChanges llamado', changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck llamado');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit llamado');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked llamado');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit llamado');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked llamado');
  }
}

//En esta parte no supe para que utilizarlos todos y no queria tenerlos ahi porque si igualmente indague en como hacerlos.
