import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-me-modal',
  templateUrl: './contact-me-modal.component.html',
  styleUrls: ['./contact-me-modal.component.scss']
})
export class ContactMeModalComponent {

  constructor(public activeModal: NgbActiveModal) {}

}
