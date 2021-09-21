import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home-modal',
  templateUrl: './home-modal.component.html',
  styleUrls: ['./home-modal.component.css']
})
export class HomeModalComponent implements OnInit {

  nomePokemon: any;
  dados:any;

  constructor(public dialogRef: MatDialogRef<HomeModalComponent>, @Inject(MAT_DIALOG_DATA) public data:any, private homeService: HomeService) { 
    this.nomePokemon = data.name;
  }

  listarPokemon(dados: any) {
    this.dados = dados;
    console.log(this.dados);
  }

  ngOnInit(): void {
    this.homeService.getPokemon(this.nomePokemon).subscribe((dados:any) => this.listarPokemon(dados));
  }

}
