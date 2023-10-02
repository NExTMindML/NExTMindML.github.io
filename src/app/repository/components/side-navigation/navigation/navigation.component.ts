import { Component } from '@angular/core';
import { Card } from 'src/app/core/models/card';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  active = 1;

  basicInfo: { tittle: String, cards: Card[] }[] = [
    { tittle: "Machine Learning", cards: [ 
    {
      tittle: "What is Machine Learning",
      minutesRead: 10
    }, 
    {
      tittle: "Machine Learning Map",
      minutesRead: 10
    },
    {
      tittle: "CRISP-DM",
      minutesRead: 10
    },
    {
      tittle: "Param-type Algorithms",
      minutesRead: 10
    },
    {
      tittle: "Supervision in Algorithms",
      minutesRead: 10
    }
  ]},
  { tittle: "Data Preparation", cards: [ 
    {
      tittle: "Data Preparation",
      minutesRead: 10
    },
    {
      tittle: "Data Handling",
      minutesRead: 10
    }
  ]},
  { tittle: "Modeling", cards: [ 
    {
      tittle: "Modeling",
      minutesRead: 10
    },
    {
      tittle: "Algorithms",
      minutesRead: 10
    },
    {
      tittle: "Linear Algorithms",
      minutesRead: 10
    }
  ]},
  { tittle: "Performance", cards: [ 
    {
      tittle: "Sources of Errors",
      minutesRead: 10
    },
    {
      tittle: "Low Performance",
      minutesRead: 10
    },
    {
      tittle: "Linear Algorithms",
      minutesRead: 10
    }
  ]}
  ]
}
