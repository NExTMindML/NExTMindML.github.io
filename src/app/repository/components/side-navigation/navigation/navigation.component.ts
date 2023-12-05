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
          tittle: "Que es Machine Learning",
          minutesRead: 7,
          cardId: WhatIsMachineLearningComponent,
          labels: ['Concepto']
        },
        {
          tittle: "Aspectos tecnicos de ML",
          minutesRead: 5,
          cardId: MlTechnicalAspectComponent,
          labels: ['Concepto']
        },
        {
          tittle: "CRISP-DM",
          minutesRead: 1,
          cardId: CRISPDMComponent,
          labels: ['Concepto central']
        },
        {
          tittle: "Algoritmos parametricos",
          minutesRead: 6,
          cardId: ParamAlgorithmComponent,
          labels: ['Concepto central']
        },
        {
          tittle: "Supervisación en algoritmos",
          minutesRead: 5,
          cardId: SupervisionAlgorithmComponent,
          labels: ['Tipos del algoritmos']
        }
      ]
    },
    {
      tittle: "Preparación de datos", cards: [
        {
          tittle: "Preparación de datos",
          minutesRead: 5,
          cardId: DataHandlingComponent,
          labels: ['Preprocesamiento']
        }
      ]
    },
    {
      tittle: "Modelado", cards: [
        {
          tittle: "Modelado",
          minutesRead: 0,
          cardId: "what_ML"
        },
        {
          tittle: "Algoritmos",
          minutesRead: 0,
          cardId: "what_ML"
        },
        {
          tittle: "Algoritmos lineales",
          minutesRead: 0,
          cardId: "what_ML"
        }
      ]
    },
    {
      tittle: "Performance", cards: [
        {
          tittle: "Origen de errores",
          minutesRead: 5,
          cardId: SourcesErrosComponent
        },
        {
          tittle: "Baja Performance",
          minutesRead: 4,
          cardId: LowPerformanceComponent
        },
        {
          tittle: "Test de Performance",
          minutesRead: 0,
          cardId: "what_ML"
        },
        {
          tittle: "Decenso gradiante",
          minutesRead: 0,
          cardId: "what_ML"
        }
      ]
    }
  ];

  basics: { tittle: String, cards: Card[] }[] = [
    {
      tittle: "Entendimiento de datos", cards: [
        {
          tittle: "Problema del poker",
          minutesRead: 0,
          miner: true,
          cardId: "what_ML"
        },
        {
          tittle: "Problema del Iris",
          minutesRead: 0,
          miner: true,
          cardId: "what_ML"
        }]
    },
    {
      tittle: "Algoritmos lineales", cards: [
        {
          tittle: "Regresion lineal",
          minutesRead: 0,
          excel: true,
          python: true,
          cardId: "what_ML"
        },
        {
          tittle: "Regresion logistica",
          minutesRead: 0,
          excel: true,
          python: true,
          cardId: "what_ML"
        },
        {
          tittle: "LDA",
          minutesRead: 0,
          excel: true,
          python: true,
          cardId: "what_ML",
          labels: ['Concepto']

        }
      ]
    }
  ];

  cases: Card[] = [
    {
      tittle: "CKD detection",
      minutesRead: 35,
      miner: true,
      cardId: KidneyCaseComponent,
      labels: ['Supervisado', 'Clasificación binaria']
    },
    {
      tittle: "Titanic - Empezando",
      minutesRead: 45,
      miner: true,
      cardId: TitanicCaseComponent,
      labels: ['Supervisado', 'Clasificacion binaria']
    }
  ];
}
