import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-airquality',
  templateUrl: './airquality.component.html',
  styleUrls: ['./airquality.component.css']
})
export class AirqualityComponent implements OnInit {
  co:any
  nh3: any
  no: any
  no2: any
  o3: any
  pm2_5: any
  pm10: any
  so2: any
  collection:any
  aqi:any
  color:any
  lat:any
  long:any
  collection1:any
  show=false
  yes2=false
  
  constructor(private ds1:DataService) {  }

            formdata=new FormGroup({
              city:new FormControl(''),})  
          
getdata(c:any){

            
             this.ds1.getcurrentdata(c.city).subscribe(data=>{
               this.yes2=false
              this.collection1=data 
                      this.lat=this.collection1.coord["lat"]
                      this.long=this.collection1.coord["lon"]

                    this.ds1.airquality(this.lat,this.long).subscribe(data1=>{
                            this.collection=data1
                      this.co=this.collection.list["0"].components["co"]
                      this.nh3=this.collection.list["0"].components["nh3"]
                      this.no=this.collection.list["0"].components["no"]
                      this.no2=this.collection.list["0"].components["no2"]
                      this.o3=this.collection.list["0"].components["o3"]
                      this.pm2_5=this.collection.list["0"].components["pm2_5"]
                      this.pm10=this.collection.list["0"].components["pm10"]
                      this.so2=this.collection.list["0"].components["so2"]
                      this.aqi=this.collection.list["0"].main["aqi"]

                      if(this.aqi==1 || this.aqi==2){

                        this.color="card text-white bg-success mb-3"
                      }
                      else if(this.aqi==3){
        
                                    this.color="card text-white bg-warning mb-3" 
        
                           }
                       else{
        
        
                              this.color="card text-white bg-danger mb-3"
                       }
                       
                      this.show=true
                    })                    
             },error=>{this.yes2=true
                          this.show=false
                
                        })
             this.formdata.reset("")
            
     }
  ngOnInit(): void {
  }

}
