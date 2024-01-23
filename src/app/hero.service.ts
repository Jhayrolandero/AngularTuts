import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './component/heroes/mock-heroes'
import { Observable, of } from 'rxjs';
import { MessageService } from './messages.service';

@Injectable({
  providedIn: 'root'
})

/*

Service = The Dependency Injector for Angular
          Basically let other components use "pieces of codes" 
          to make them functional so that you don't have to 
          infer them in the components directly. Modular approach which
          is neat

*/
// Depedency Injector for Angular
export class HeroService {

  // Service using another service is called "Service to Service"
  constructor(private messageService: MessageService) {}

  // Properties Available to the HeroService

  /*
  getHeroes() is making async calls using the Observable method available to Angular
  . Blud have built in fetch api
  */
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES)
    this.messageService.add('HeroServices: Fetched Heroes')
    return heroes
  }
}
