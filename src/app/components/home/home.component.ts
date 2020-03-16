import { Component, OnInit } from "@angular/core";
import { HeroesService } from "../../services/heroes.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(
    private heroService: HeroesService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  heros: any[] = [];

  ngOnInit(): void {}

  buscarHeroe(text: string) {
    if (text.length === 0) {
      this.heros = [];
    } else {
      this.heros = this.heroService.searchHero(text);
      if (this.heros.length === 0) {
        this.openSnackBar(
          `No se encontraron resultados para ${text}`,
          "Cerrar"
        );
      }
    }
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }

  verHeroe(event) {
    console.log(event);
    const index = this.heroService.searchByName(event.nombre);
    this.router.navigate(["/heroes", index]);
  }
}
