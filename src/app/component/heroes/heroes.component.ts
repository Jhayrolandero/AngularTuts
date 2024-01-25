import { Component } from '@angular/core';
import { Hero } from '../../hero';
import { NgFor, NgIf } from '@angular/common';
import { HeroService } from '../../hero.service';
import { MessageService } from '../../messages.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent {

  heroes: Hero[] = []
  selectedHero?: Hero
  onSelect(hero: Hero): void {
    this.selectedHero = hero
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

    // (DI) Init a service first 
  constructor(private heroService: HeroService, private messageService: MessageService) {}

  //  These are the methods available in the service
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  ngOnInit(): void {
    this.getHeroes()
  }
}
