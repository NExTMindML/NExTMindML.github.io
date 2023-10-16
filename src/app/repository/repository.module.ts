import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryPageComponent } from './components/repository-page/repository-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './components/side-navigation/navigation/navigation.component';
import { CollapseComponent } from './components/side-navigation/collapse/collapse.component';
import { RepositoryCardComponent } from './components/side-navigation/repository-card/repository-card.component';
import { WhatIsMachineLearningComponent } from './components/cards-info/what-is-machine-learning/what-is-machine-learning.component';
import { TittleComponent } from './components/text-components/title/tittle.component';
import { ParagraphComponent } from './components/text-components/paragraph/paragraph.component';
import { SubTitleComponent } from './components/text-components/sub-title/sub-title.component';
import { MiniSubTitleComponent } from './components/text-components/mini-sub-title/mini-sub-title.component';
import { ListItemComponent } from './components/text-components/list-item/list-item.component';
import { QuoteComponent } from './components/text-components/quote/quote.component';
import { CRISPDMComponent } from './components/cards-info/crisp-dm/crisp-dm.component';
import { NotPageInfoComponent } from './components/cards-info/not-page-info/not-page-info.component';
import { DataHandlingComponent } from './components/cards-info/data-handling/data-handling.component';
import { CalloutComponent } from './components/text-components/callout/callout.component';
import { MlTechnicalAspectComponent } from './components/cards-info/ml-technical-aspect/ml-technical-aspect.component';
import { ParamAlgorithmComponent } from './components/cards-info/param-algorithm/param-algorithm.component';
import { SupervisionAlgorithmComponent } from './components/cards-info/supervision-algorithm/supervision-algorithm.component';
import { SourcesErrosComponent } from './components/cards-info/sources-erros/sources-erros.component';
import { LowPerformanceComponent } from './components/cards-info/low-performance/low-performance.component';

@NgModule({
  declarations: [
    RepositoryPageComponent,
    NavigationComponent,
    CollapseComponent,
    RepositoryCardComponent,
    WhatIsMachineLearningComponent,
    TittleComponent,
    ParagraphComponent,
    SubTitleComponent,
    MiniSubTitleComponent,
    ListItemComponent,
    QuoteComponent,
    CRISPDMComponent,
    NotPageInfoComponent,
    DataHandlingComponent,
    CalloutComponent,
    MlTechnicalAspectComponent,
    ParamAlgorithmComponent,
    SupervisionAlgorithmComponent,
    SourcesErrosComponent,
    LowPerformanceComponent,
    TitanicCaseComponent,
    ImageComponent,
    KidneyCaseComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RepositoryRoutingModule
  ]
})
export class RepositoryModule { }import { RepositoryRoutingModule } from './repository-routing.module';
import { TitanicCaseComponent } from './components/cards-info/titanic-case/titanic-case.component';
import { ImageComponent } from './components/text-components/image/image.component';
import { KidneyCaseComponent } from './components/cards-info/kidney-case/kidney-case.component';

