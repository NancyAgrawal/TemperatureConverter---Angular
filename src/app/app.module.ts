import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConverterComponent } from './converter/converter.component';
import { TemperatureConverterService } from './temperature-converter.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HeaderComponent, FooterComponent, ConverterComponent],
  bootstrap: [AppComponent],
  providers: [TemperatureConverterService]
})
export class AppModule {}
