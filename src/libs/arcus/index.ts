import type { Quart, MasterQuart } from "./@types";

export class ARCUS {
  slots: (Quart | MasterQuart)[];

  constructor() {
    this.slots = [];
  }

  addQuart(quart: Quart) {
    this.slots.push(quart);
  }

  addMasterQuart(masterQuart: MasterQuart) {
    this.slots.push(masterQuart);
  }
};
