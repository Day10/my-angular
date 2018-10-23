import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    // 在真是项目中，如果heroService.getHeroes是异步，下面这句是无用的，因为异步的话，不会立马返回数据
    // this.heroes = this.heroService.getHeroes();
    // 等到Observable发出heroes数据时发出数组传给回掉函数，所以可以是异步的
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}