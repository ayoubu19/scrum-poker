import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/database';
import { Observable } from 'rxjs';
import { from } from 'rxjs';

import { Room } from 'src/app/models/room';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private dbPath = '/rooms';

  roomsRef: AngularFireList<Room>;

  constructor(private db: AngularFireDatabase) {
    this.roomsRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Room> {
    return this.roomsRef;
  }

  getRoomById(roomId: string): AngularFireObject<Room> {
    return this.db.object(`${this.dbPath}/${roomId}`);
  }

  createRoom(room: Room): Observable<any> {
    return from(this.roomsRef.push(room));
  }
}
