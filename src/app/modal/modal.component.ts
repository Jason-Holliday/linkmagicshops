import { Component, OnDestroy } from '@angular/core';
import { ModalService } from '../services/mondal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnDestroy {
  isOpen = false;
  private modalSub: Subscription;

  constructor(private modalService: ModalService) {
    this.modalSub = this.modalService.modalOpen$.subscribe((state) => {
      this.isOpen = state;
    });
  }

  closeModal() {
    this.modalService.closeModal();
  }

  ngOnDestroy() {
    this.modalSub.unsubscribe();
  }
}
