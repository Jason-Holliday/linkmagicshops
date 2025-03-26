import { Component } from '@angular/core';
import { ModalService } from '../services/mondal.service';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})

export class NavComponent {
  constructor(private modalService: ModalService) {}

  openFeedbackModal() {
    this.modalService.openModal();
  }
}
