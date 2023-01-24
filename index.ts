import { Weatherstation } from "./Observable";
import { PhoneDisplay } from "./Observer";

function main(){
  const station = new Weatherstation(29);

  const iphone1 = new PhoneDisplay(station);
  station.add(iphone1);
  const iphone2 = new PhoneDisplay(station);
  station.add(iphone2)

  station.notify();

  station.setTemperature(30);

  station.notify();

  
}

main();