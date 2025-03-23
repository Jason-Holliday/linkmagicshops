import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime, startWith, map } from 'rxjs';

interface Shops {
  id: number;
  name: string;
  url: string;
  urlName: string;
}

@Component({
  selector: 'app-link-shop',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './link-shop.component.html',
  styleUrl: './link-shop.component.scss'
})
export class LinkShopComponent {

  isShopFound = false;

  searchControl = new FormControl('');

  shops: Shops[] = [
    { id: 1, name: 'Zauberbox', url: 'https://www.zauberbox.at/', urlName: 'Besuche Zauberbox (zauberbox.at)' },
    { id: 2, name: 'Ellusionist Magic Store', url: 'https://ellusionist.com/', urlName: 'Besuche Ellusionist Magic Store (ellusionist.com)' },
    { id: 3, name: 'Murphy\'s Magic Supplies', url: 'https://www.murphysmagic.com/', urlName: 'Besuche Murphy\'s Magic Supplies (murphysmagic.com)' },
    { id: 4, name: 'SteMaRo-Magic', url: 'https://stemaro-magic.de/', urlName: 'Besuche SteMaRo-Magic (stemaro-magic.de)' },
    { id: 5, name: 'Magic-Factory', url: 'https://www.magic-factory.de/', urlName: 'Besuche Magic-Factory (magic-factory.de)' },
    { id: 6, name: 'Apollo Works', url: 'https://en.apolloworksmagic.com/', urlName: 'Besuche Apollo Works (apolloworksmagic.com)' },
    { id: 7, name: 'Secret School', url: 'https://secretschool.shop/', urlName: 'Besuche Secret School (secretschool.shop)' },
    { id: 8, name: 'Penguin Magic Shop', url: 'https://www.penguinmagic.com/', urlName: 'Besuche Penguin Magic Shop (penguinmagic.com)' },
    { id: 9, name: 'Secret Magic Store', url: 'https://secret-magic-store.de/', urlName: 'Besuche Secret Magic Store (secret-magic-store.de)' },
    { id: 10, name: 'Copeland Coins', url: 'https://copelandcoins.com/', urlName: 'Besuche Copeland Coins (copelandcoins.com)' },
    { id: 11, name: 'Professors Laboratory - [Miles Pitwell]', url: 'https://professors-laboratory.com/', urlName: 'Besuche Professors Laboratory (professors-laboratory.com)' },
    { id: 12, name: 'Stolina', url: 'https://www.stolina.de/', urlName: 'Besuche Stolina (stolina.de)' },
    { id: 13, name: 'Vanishing Inc.', url: 'https://www.vanishingincmagic.com/', urlName: 'Besuche Vanishing Inc. (vanishingincmagic.com)' },
    { id: 14, name: 'Alakazam', url: 'https://alakazam.co.uk/', urlName: 'Besuche Alakazam (alakazam.co.uk)' },
    { id: 15, name: 'Tesemar Zauberartikel', url: 'https://tesmarzauberartikel.de/', urlName: 'Besuche Tesemar Zauberartikel (tesmarzauberartikel.de)' },
    { id: 16, name: 'Theory11', url: 'https://www.theory11.com/', urlName: 'Besuche Theory11 (theory11.com)' },
    { id: 17, name: 'Artofmagic', url: 'https://www.artofmagic.com/', urlName: 'Besuche Artofmagic (artofmagic.com)' },
    { id: 18, name: 'Matthias Berger Shop', url: 'https://www.mattisupport.de/', urlName: 'Besuche Matthias Berger Shop (mattisupport.de)' },
    { id: 19, name: 'Zauberkoenig Berlin', url: 'https://www.zauberkoenig-berlin.de/', urlName: 'Besuche Zauberkoenig Berlin (zauberkoenig-berlin.de)' },
    { id: 20, name: 'Spielekartenshop', url: 'https://www.spielkartenshop.com/', urlName: 'Besuche Spielekartenshop (spielkartenshop.com)' }
  ];
  


  filteredShopsList: Shops[] = [...this.shops];

  constructor() {
    this.searchControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(200),
        map(searchTerm => this.filterShops(searchTerm || ''))
      )
      .subscribe(filtered => (this.filteredShopsList = filtered));
  }

  filterShops(searchTerm: string): Shops[] {
    const filteredShops = this.shops.filter(shop =>
      shop.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    // Setze isShopFound, je nachdem, ob es gefundene Shops gibt oder nicht
    this.isShopFound = filteredShops.length > 0;
  
    return filteredShops;
  }
  

}
