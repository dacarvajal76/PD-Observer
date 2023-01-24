import { Observer } from './Observer'

interface Observable{
  add(observer: Observer): void;
  remove(observer: Observer): void;
  notify(): void;
  
}

export class Weatherstation implements Observable{
  observers: Observer [];
  temperature: number;

  constructor(temperature: number){
    this.observers = [];
    this.temperature = temperature;
  }  

  public add(observer: Observer): void{
    this.observers.push(observer);
  }

  public remove(observer: Observer): void{
    this.observers.splice(this.observers.indexOf(observer), 1);
  }

  public notify(): void {
      this.observers.forEach(observer => {
        observer.update();
      });
  }

  public setTemperature(temperature: number): void{
    this.temperature = temperature;
  }

  public getTemperature(){
    return this.temperature;
  }
}