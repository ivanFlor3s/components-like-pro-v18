import { Component, computed, DestroyRef, effect, inject, input, Signal, signal } from '@angular/core';
import { filter, interval } from 'rxjs';
import { CardComponent, ProgresBarComponent } from '..';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [ProgresBarComponent, CardComponent],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {
  public readonly initSeconds = input.required<number>()
  private destroyRef = inject(DestroyRef)

  countdown = signal(0)
  pause = signal(false)

  timeFormatted = computed(() => {
    const totalSeconds = this.countdown()
    const minutes = Math.floor(this.countdown() / 60)
    const seconds = totalSeconds % 60

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  })

  percentage = computed(() => {
    const result = (this.initSeconds() - this.countdown()) / this.initSeconds() * 100
    return 100 - result
  })

  ngOnInit(): void {
    this.countdown.set(this.initSeconds())
    this.initDownCount()
  }

  initDownCount() {
    interval(1000)
      .pipe(
        filter((_) => {
          return !(this.pause() || this.countdown() == 0)
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(_ => {
        this.countdown.update(value => value - 1)
      })
  }

  togglePause(){
   this.pause.update( v => !v) 
  }
  restart() {
    this.countdown.set(this.initSeconds())
  }
}
