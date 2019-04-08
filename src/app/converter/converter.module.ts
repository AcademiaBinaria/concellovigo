import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { AmericaService } from './america.service';
import { ConverterRoutingModule } from './converter-routing.module';
import { ConverterService } from './converter.service';
import { ConverterComponent } from './converter/converter.component';
import { CultureConverterService } from './culture-converter.service';
import { CultureConverterComponent } from './culture-converter/culture-converter.component';
import { EuropeService } from './europe.service';

const cultureFactory = (converterService: ConverterService) => {
  if (environment.unitsCulture === 'metric') {
    return new EuropeService(converterService);
  } else {
    return new AmericaService(converterService);
  }
};

@NgModule({
  declarations: [ConverterComponent, CultureConverterComponent],
  imports: [CommonModule, FormsModule, ConverterRoutingModule],
  providers: [{ provide: CultureConverterService, useFactory: cultureFactory, deps: [ConverterService] }]
})
export class ConverterModule {}
