import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'; //cambio 1

import { IonicModule } from '@ionic/angular';

import { Ejemplo2PageRoutingModule } from './ejemplo2-routing.module';

import { Ejemplo2Page } from './ejemplo2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, //cambio 2
    Ejemplo2PageRoutingModule
  ],
  declarations: [Ejemplo2Page]
})
export class Ejemplo2PageModule {}
