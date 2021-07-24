import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from '../services/message.service';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../components/heroes/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');

    return heroes;
  }

  getHero(id: Number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);

    return of(hero);
  }
}
