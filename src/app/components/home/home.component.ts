import { Component, OnInit } from "@angular/core";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private heroService: HeroesService) {}

  heros: any[] = [];

  ngOnInit(): void {}

  buscarHeroe(text: string) {
    console.log(text);
    if (text.length === 0) {
      this.heros = [];
    } else {
      this.heros = this.heroService.searchHero(text);
    }
  }
}
