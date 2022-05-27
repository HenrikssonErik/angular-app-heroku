import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutusComponent } from './views/aboutus/aboutus.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { FormsModule } from '@angular/forms';
import { HomeAboutComponent } from './home-about/home-about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingComponent } from './views/rating/rating.component';
import { SeriesComponent } from './views/series/series.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutusComponent,
    CalendarComponent,
    HomePageComponent,
    SidePanelComponent,
    HomeAboutComponent,
    RatingComponent,
    SeriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
