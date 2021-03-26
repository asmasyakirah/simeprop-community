import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitorEditPageRoutingModule } from './visitor-edit-routing.module';

import { VisitorEditPage } from './visitor-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitorEditPageRoutingModule
  ],
  declarations: [VisitorEditPage]
})
export class VisitorEditPageModule {}
