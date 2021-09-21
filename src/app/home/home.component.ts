import { HomeModalComponent } from './home-modal/home-modal.component';
import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dados:any[] = [];
  searchText: any;

  constructor(private homeService: HomeService, private dialog: MatDialog) { }

 
  openDialog(namePokemon: string) {
    this.dialog.open(HomeModalComponent,  {
      width: '600px',
      data: {name: namePokemon}
    });
  }

  ngOnInit(): void {
    this.homeService.getPokedex().subscribe((dados: any) => dados.results.forEach((result:any) => {
      this.homeService.getPokemon(result.name).subscribe((dados:any) => this.dados.push(dados));
    }));
    console.log(this.dados);
  }

}
