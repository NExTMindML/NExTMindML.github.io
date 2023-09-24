import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryPageComponent } from './components/repository-page/repository-page.component';

const routes: Routes = [
    {
        path: "",
        component: RepositoryPageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RepositoryRoutingModule { }
