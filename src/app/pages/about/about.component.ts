import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { Team } from 'src/app/interfaces/team-pagina.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  team: Array<Team>;

  constructor(
    private _info: InfoPaginaService
  ) { }

  ngOnInit(): void {

    this._info.getTeam ().subscribe (
      (response: Array<Team>) => {
        this.team = response;
      }
    )
  }

}
