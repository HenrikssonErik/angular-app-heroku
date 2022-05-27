import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from '../app/views/aboutus/aboutus.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { RatingComponent } from './views/rating/rating.component';
import { SeriesComponent } from './views/series/series.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'rating', component: RatingComponent },
  { path: 'series', component: SeriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
