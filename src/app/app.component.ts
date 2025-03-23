import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkShopComponent } from "./link-shop/link-shop.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LinkShopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'linkmagicshops';
}
