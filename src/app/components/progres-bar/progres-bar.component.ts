import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-progres-bar',
  standalone: true,
  imports: [],
  templateUrl: './progres-bar.component.html',
  styleUrl: './progres-bar.component.scss'
})
export class ProgresBarComponent {

  public percentage = input.required<number>();

  constructor(){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  
  }
  


}
