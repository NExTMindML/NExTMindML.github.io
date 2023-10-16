import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactMeModalComponent } from '../contact-me-modal/contact-me-modal.component';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss']
})
export class HeaderNavbarComponent {
	constructor(private modalService: NgbModal) {}

	openModal() {
		this.modalService.open(ContactMeModalComponent, { centered: true });
	}
}
