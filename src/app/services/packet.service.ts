import { Injectable } from '@angular/core';
import { PacketTour } from '../models/packetTour.model';

@Injectable({
  providedIn: 'root'
})
export class PacketService {

  private packetList: PacketTour[] = [];
  constructor() { }

  getPacketList() { return this.packetList; }

  getPacket(index: number){ return this.packetList[index]; }
}
