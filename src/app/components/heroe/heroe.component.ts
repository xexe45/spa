import { Component, OnInit } from "@angular/core";
import { HeroesService } from "../../services/heroes.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styleUrls: ["./heroe.component.scss"]
})
export class HeroeComponent implements OnInit {
  hero: any = {};

  constructor(
    private heroService: HeroesService,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      const id = params["id"];
      this.hero = this.heroService.getHeroByIndex(id);
    });
  }
}
