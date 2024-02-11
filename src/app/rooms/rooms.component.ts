import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
  hotelName = 'the conrad';
  numberOfRooms = 8;

  hideRooms = false;

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
