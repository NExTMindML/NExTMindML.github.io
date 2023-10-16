import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Card } from 'src/app/core/models/card';
import { WhatIsMachineLearningComponent } from '../../cards-info/what-is-machine-learning/what-is-machine-learning.component';
import { CRISPDMComponent } from '../../cards-info/crisp-dm/crisp-dm.component';
import { DataHandlingComponent } from '../../cards-info/data-handling/data-handling.component';
import { MlTechnicalAspectComponent } from '../../cards-info/ml-technical-aspect/ml-technical-aspect.component';
import { ParamAlgorithmComponent } from '../../cards-info/param-algorithm/param-algorithm.component';
import { SupervisionAlgorithmComponent } from '../../cards-info/supervision-algorithm/supervision-algorithm.component';
import { SourcesErrosComponent } from '../../cards-info/sources-erros/sources-erros.component';
import { LowPerformanceComponent } from '../../cards-info/low-performance/low-performance.component';
import { TitanicCaseComponent } from '../../cards-info/titanic-case/titanic-case.component';
import { KidneyCaseComponent } from '../../cards-info/kidney-case/kidney-case.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent    {
  @Input() active?: number;
  
  @Output() selectCardEvent = new EventEmitter<any>();  

  selectCard(info: String) {
    this.selectCardEvent.emit(info)
  }

  concetps: { tittle: String, cards: Card[] }[] = [
    {
      tittle: "Machine Learning", cards: [
        {
          tittle: "What is Machine Learning",
          minutesRead: 7,
          cardId: WhatIsMachineLearningComponent
        },
        {
          tittle: "Technical aspect of ML",
          minutesRead: 5,
          cardId: MlTechnicalAspectComponent
        },
        {
          tittle: "CRISP-DM",
          minutesRead: 1,
          cardId: CRISPDMComponent
        },
        {
          tittle: "Param-type Algorithms",
          minutesRead: 6,
          cardId: ParamAlgorithmComponent
        },
        {
          tittle: "Supervision in Algorithms",
          minutesRead: 5,
          cardId: SupervisionAlgorithmComponent
        }
      ]
    },
    {
      tittle: "Data Preparation", cards: [
        {
          tittle: "Data Preparation",
          minutesRead: 5,
          cardId: DataHandlingComponent
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
          minutesRead: 5,
          cardId: SourcesErrosComponent
        },
        {
          tittle: "Low Performance",
          minutesRead: 4,
          cardId: LowPerformanceComponent
        },
        {
          tittle: "Performance test",
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
      tittle: "Kidney detection",
      minutesRead: 35,
      miner: true,
      python: true,
      cardId: KidneyCaseComponent
    },
    {
      tittle: "Titanic - Getting Started",
      minutesRead: 45,
      miner: true,
      python: true,
      cardId: TitanicCaseComponent
    }
  ];
}
