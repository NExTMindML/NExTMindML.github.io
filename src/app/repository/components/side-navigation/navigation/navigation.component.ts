import { Component, EventEmitter, Output } from '@angular/core';
import { Card } from 'src/app/core/models/card';
import { WhatIsMachineLearningComponent } from '../../cards-info/what-is-machine-learning/what-is-machine-learning.component';
import { CRISPDMComponent } from '../../cards-info/crisp-dm/crisp-dm.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  active = 1;
  
  @Output() selectCardEvent = new EventEmitter<any>();

  selectCard(info: String) {
    this.selectCardEvent.emit(info)
  }

  concetps: { tittle: String, cards: Card[] }[] = [
    {
      tittle: "Machine Learning", cards: [
        {
          tittle: "What is Machine Learning",
          minutesRead: 5,
          cardId: WhatIsMachineLearningComponent
        },
        {
          tittle: "Machine Learning Map",
          minutesRead: 10,
          cardId: "what_ML"
        },
        {
          tittle: "CRISP-DM",
          minutesRead: 10,
          cardId: CRISPDMComponent
        },
        {
          tittle: "Param-type Algorithms",
          minutesRead: 10,
          cardId: "what_ML"
        },
        {
          tittle: "Supervision in Algorithms",
          minutesRead: 10,
          cardId: "what_ML"
        }
      ]
    },
    {
      tittle: "Data Preparation", cards: [
        {
          tittle: "Data Preparation",
          minutesRead: 10,
          cardId: "what_ML"
        },
        {
          tittle: "Data Handling",
          minutesRead: 10,
          cardId: "what_ML"
        }
      ]
    },
    {
      tittle: "Modeling", cards: [
        {
          tittle: "Modeling",
          minutesRead: 10,
          cardId: "what_ML"
        },
        {
          tittle: "Algorithms",
          minutesRead: 10,
          cardId: "what_ML"
        },
        {
          tittle: "Linear Algorithms",
          minutesRead: 10,
          cardId: "what_ML"
        }
      ]
    },
    {
      tittle: "Performance", cards: [
        {
          tittle: "Sources of Errors",
          minutesRead: 10,
          cardId: "what_ML"
        },
        {
          tittle: "Low Performance",
          minutesRead: 10,
          cardId: "what_ML"
        },
        {
          tittle: "Performance test",
          minutesRead: 10,
          cardId: "what_ML"
        },
        {
          tittle: "Underfiting-Overfiting",
          minutesRead: 10,
          cardId: "what_ML"
        },
        {
          tittle: "Gradient Descent",
          minutesRead: 10,
          cardId: "what_ML"
        }
      ]
    }
  ];

  basics: { tittle: String, cards: Card[] }[] = [
    {
      tittle: "Data Understanding", cards: [
        {
          tittle: "Poker Problem",
          minutesRead: 10,
          miner: true,
          cardId: "what_ML"
        },
        {
          tittle: "Iris Problem",
          minutesRead: 10,
          miner: true,
          cardId: "what_ML"
        }]
    },
    {
      tittle: "Linear Algorithms", cards: [
        {
          tittle: "Linear Regression",
          minutesRead: 10,
          excel: true,
          python: true,
          cardId: "what_ML"
        },
        {
          tittle: "Logistic Regression",
          minutesRead: 10,
          excel: true,
          python: true,
          cardId: "what_ML"
        },
        {
          tittle: "LDA",
          minutesRead: 10,
          excel: true,
          python: true,
          cardId: "what_ML"
        }
      ]
    }
  ];

  cases: Card[] = [
    {
      tittle: "Wine",
      minutesRead: 10,
      miner: true,
      python: true,
      cardId: "what_ML"
    },
    {
      tittle: "Titanic",
      minutesRead: 10,
      miner: true,
      python: true,
      cardId: "what_ML"
    },
    {
      tittle: "Banking",
      minutesRead: 10,
      miner: true,
      python: true,
      cardId: "what_ML"
    },
    {
      tittle: "Iris",
      minutesRead: 10,
      miner: true,
      python: true,
      cardId: "what_ML"
    },
    {
      tittle: "Heart",
      minutesRead: 10,
      miner: true,
      python: true,
      cardId: "what_ML"
    }
  ];
}
