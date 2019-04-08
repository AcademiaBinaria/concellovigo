import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConverterService } from './converter/converter.service';
import { CoreModule } from './core/core.module';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [AppComponent, HeroesComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  providers: [ConverterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
