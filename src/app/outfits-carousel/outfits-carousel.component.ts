import { Component, OnInit } from '@angular/core';
import { Outfit } from '../interfaces/Outfit';
import { OutfitsService } from '../services/outifts.service';

@Component({
  selector: 'app-outfits-carousel',
  templateUrl: './outfits-carousel.component.html',
  styleUrls: ['./outfits-carousel.component.sass']
})
export class OutfitsCarouselComponent implements OnInit {
  outfits: any = []

  constructor(private outfitsService: OutfitsService) { }

  ngOnInit(): void {
  }

  fetchOutfits(){
    this.outfitsService.fetchOutfits()
      .subscribe((res) => this.outfits = res);
  }

}
