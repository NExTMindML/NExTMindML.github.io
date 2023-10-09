import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OpenRepositoryService } from 'src/app/landing/services/open-repository.service';

@Component({
  selector: 'app-navigation-card',
  templateUrl: './navigation-card.component.html',
  styleUrls: ['./navigation-card.component.scss']
})
export class NavigationCardComponent {
@Input() text?: String;
@Input() title?: String;
@Input() imagePath?: String;
@Input() sectionNumber?: number;


constructor(private repositoryEventEmitter: OpenRepositoryService, private router: Router) {}

indicateRepository() {
  this.repositoryEventEmitter.emitEvent(this.sectionNumber!)
  this.navigateToRepository()
}

navigateToRepository() {
  this.router.navigate(['/repository']);
}
}
