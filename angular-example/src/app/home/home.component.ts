import { Component, OnInit } from '@angular/core';

export interface TeamData{
  teamName: string;
  teamLocation: string;
  teamNumber: number;
}

const TEAM_DATA: TeamData[] = [
  { teamName: 'Simpsons', teamLocation: '742 Evergreen Terrace, Springfield', teamNumber: 5 },
  { teamName: 'Ring Fellowship', teamLocation: 'Rivendell', teamNumber: 9 },
  { teamName: 'FantasticFour', teamLocation: 'Baxter Building', teamNumber: 4 }
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  teamTableColumns : string[] = ['teamName', 'teamLocation', 'teamNumber'];
  dataSource = TEAM_DATA;
  constructor() { }

  ngOnInit(): void {
  }
}
