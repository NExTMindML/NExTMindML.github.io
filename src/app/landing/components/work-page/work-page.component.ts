import { Component } from '@angular/core';
import { OpenRepositoryService } from '../../services/open-repository.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.scss']
})
export class WorkPageComponent {

  ngOnInit() {
    AOS.init();
  }
}
