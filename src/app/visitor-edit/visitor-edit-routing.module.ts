import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitorEditPage } from './visitor-edit.page';

const routes: Routes = [
  {
    path: '',
    component: VisitorEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitorEditPageRoutingModule {}
