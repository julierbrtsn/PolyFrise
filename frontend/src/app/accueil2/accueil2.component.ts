import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-accueil2',
  templateUrl: './accueil2.component.html',
  styleUrls: ['./accueil2.component.css']
})

export class Accueil2Component implements OnInit{
  couleur: string = '';
  couleurPersonnalise: string = '';
  forme: string = '';
  friseHistorique: any[] = [];
  selectionPersonnalisee: boolean = false;
  data:any;
  alert: boolean= false;
  errorMessage: string="";
  infoChoix: any;
  constructor (private router : Router, private messageService: MessageService){}
  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('data') || '{}');

    //console.log(this.data);
  }
  toggleSelection() {
    this.selectionPersonnalisee = !this.selectionPersonnalisee;
  }

  submit(){
    this.alert==false;

    if(this.alert==false){
    if (this.selectionPersonnalisee) {
      this.infoChoix = {
        couleur: this.couleurPersonnalise,
        forme: this.forme
      };
    } else {
      this.infoChoix = {
        couleur: this.couleur,
        forme: this.forme
      };
    }

    const data = {
      categories : this.data.categories,
      startDate : this.data.startDate,
      endDate : this.data.endDate,
      color : this.couleur == "personnalise" ? this.couleurPersonnalise : this.couleur,
      shape : this.forme
    }

    this.router.navigate(['/timeline'], { queryParams: { data: JSON.stringify(data) } });

  }

  }
  toggleSelectionOff() {
    this.selectionPersonnalisee = false;
  }

}
