import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LugaresComponent } from './lugares/lugares.component';
import { TurismoRoutingModule } from './turismo-routing.module';

@NgModule({
  declarations: [LugaresComponent],
  imports: [CommonModule, TurismoRoutingModule, HttpClientModule]
})
export class TurismoModule {}
