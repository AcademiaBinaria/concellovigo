import { Injectable } from '@angular/core';
import { ConverterService } from './converter.service';

@Injectable()
export class EuropeService {
  sourceCulture = 'USA';
  targetCulture = 'Europe';
  constructor(private converterService: ConverterService) {}
  convertDistance = this.converterService.fromMilesToKilometers;
  convertTemperature = this.converterService.fromFarenheitToCelsius;
}
