import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-provider',
  templateUrl: './contact-provider.component.html',
  styleUrls: ['./contact-provider.component.scss']
})
export class ContactProviderComponent {
  @Input() icon?: string;
  @Input() link?: string;
  @Input() text?: string;

}
