import { Component, OnInit } from '@angular/core';
import { TemperatureConverterService } from '../temperature-converter.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  title = 'Temperature Converter';
  input_tmp: number = 0;
  input_type = '0';
  output_tmp: number = 32;
  output_type = '1';

  constructor(private temperatureConverter: TemperatureConverterService) {}

  ngOnInit() {}

  convert(type_tmp: string) {
    // C to F conversion wanted
    if (type_tmp === '0') {
      this.output_type = '1';
      this.output_tmp = this.temperatureConverter.CtoF(this.input_tmp);
    }

    // F to C conversion wanted
    if (type_tmp === '1') {
      this.output_type = '0';
      this.output_tmp = this.temperatureConverter.FtoC(this.input_tmp);
    }
  }
}
