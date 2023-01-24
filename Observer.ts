import { Weatherstation } from "./Observable";

export interface Observer {

  update(): void;
}

export class PhoneDisplay implements Observer {
  station: Weatherstation;

  constructor(station: Weatherstation) {
    this.station = station;
  }

  public update(): void {
    //this.station.getTemperature();
    console.log(this.station.getTemperature());
  }

}