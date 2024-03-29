import { Component, Input } from '@angular/core';
import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})

export class HeroDetailComponent {
  // This is the equivalent of passing props in Angular
  @Input() hero?: Hero;

  constructor(private heroService: HeroService) {}
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        // .subscribe(() => this.goBack());
    }
  }
}
