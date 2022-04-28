import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirqualityComponent } from './airquality/airquality.component';
import { AppComponent } from './app.component';
import { CurrentweatherComponent } from './currentweather/currentweather.component';
import { DaysweatherComponent } from './daysweather/daysweather.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [  


                      {
                        path:"currentweather",
                        component:CurrentweatherComponent
                      },

                      {
                        path:"daysweather",
                        component:DaysweatherComponent
                      },

                      {
                        path:"airquality",
                        component:AirqualityComponent
                      },
                      

                      {
                        path:"home",
                        component:HomeComponent
                      },

                      {
                        path:"",
                        component:HomeComponent
                      },

                      {
                        path:"**",
                        component:FooterComponent
                      }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
