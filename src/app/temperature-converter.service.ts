import { Injectable } from '@angular/core';

@Injectable()
export class TemperatureConverterService {
  constructor() {}

  CtoF(input_tmp: number): number {
    return (input_tmp * 9) / 5 + 32;
  }

  FtoC(input_tmp: number): number {
    return (input_tmp - 32)*5/9;
  }
}
