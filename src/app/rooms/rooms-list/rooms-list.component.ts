import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RoomList } from '../rooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnChanges {
  @Input() rooms: RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  selectRoom(room: RoomList): void {
    this.selectedRoom.emit(room);
  }
}
