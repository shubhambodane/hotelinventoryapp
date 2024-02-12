import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent {
  hotelName = 'the conrad';
  numberOfRooms = 8;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 101,
      roomType: 'Deluxe Room',
      amenities: 'television, wifi, tv, AC',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date('12-Nov-2023'),
      price: 1234,
      photos: 'test',
    },
    {
      roomNumber: 201,
      roomType: 'Normal Room',
      amenities: 'television, wifi, ',
      checkinTime: new Date('20-Nov-2023'),
      checkoutTime: new Date('27-Nov-2023'),
      price: 1000,
      photos: 'test1',
    },
  ];

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
