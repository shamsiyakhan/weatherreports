import { Injectable } from '@angular/core';
import {HttpClient}  from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getcurrentdata(a1:any){

          let url="https://api.openweathermap.org/data/2.5/weather?q="+a1+"&appid=984fd452896fcdf356d9c08f1de6e3c7" 

          return this.http.get(url)    
  }
  daysweather(d:any){


          let url1="https://api.openweathermap.org/data/2.5/forecast?q="+d+"&appid=511804e092b9f9869dfb4497d48ec8b1"
          
            return this.http.get(url1)
  }

  airquality(lat:any, long:any){

        let url="https://api.openweathermap.org/data/2.5/air_pollution?lat="+lat+"&lon="+long+"&appid=511804e092b9f9869dfb4497d48ec8b1"
            return this.http.get(url)

  }

  getlocation():Promise<any>{
    return new Promise((resolve)=>{
      navigator.geolocation.getCurrentPosition(resp=>{
        resolve({lat:resp.coords.latitude, long:resp.coords.longitude})
      })
    })
  }
    
}
