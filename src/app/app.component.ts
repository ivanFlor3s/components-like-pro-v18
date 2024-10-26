import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent, ProgresBarComponent } from './components';
import { interval, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, ProgresBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'components-like-pro-v18';

  value = signal(20)

  constructor(){


  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    interval(10000)
      .pipe()
      .subscribe(_ => this.value.set(this.value() - 1 ))
    
  }
}
