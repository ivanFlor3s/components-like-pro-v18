import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent, ProgresBarComponent, TimerComponent } from './components';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, ProgresBarComponent, TimerComponent],
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
