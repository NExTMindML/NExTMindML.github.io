import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactMeModalComponent } from '../contact-me-modal/contact-me-modal.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss']
})
export class HeaderNavbarComponent {
	constructor(private modalService: NgbModal, private translate: TranslateService) {}


	openModal() {
		this.modalService.open(ContactMeModalComponent, { centered: true });
	}

	changeLanguage(language: string) {
		this.translate.use(language) 
	}
}
