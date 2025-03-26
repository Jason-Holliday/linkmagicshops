import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkShopComponent } from "./link-shop/link-shop.component";
import { NavComponent } from "./nav/nav.component";
import { ModalComponent } from "./modal/modal.component";
import { ModalService } from './services/mondal.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LinkShopComponent, NavComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  isModalOpen = false;

  constructor(private modalService: ModalService) {
    this.modalService.modalOpen$.subscribe((state) => {
      this.isModalOpen = state;
    });
  }

  closeModal() {
    this.modalService.closeModal();
  }
}