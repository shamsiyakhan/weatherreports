import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-currentweather',
  templateUrl: './currentweather.component.html',
  styleUrls: ['./currentweather.component.css']
})
export class CurrentweatherComponent implements OnInit {
 collection:any
  temp:any
  feelslike:any
  tempmax:any
  tempmin:any
  yes=false
  yes1=true
  yes2=false
  punetmp:any
  punemin:any
  punemax:any
  collection1:any
  coll2:any
  coll3:any
  coll4:any
  coll5:any
  mumtmp:any
  mummin:any
  mummax:any
  chenntmp:any
  chennmin:any
  chennmax:any
  deltmp:any
  delmin:any
  delmax:any
  bangtmp:any
  bangmin:any
  bangmax:any
  constructor(private ds:DataService) {

      ds.getcurrentdata("pune").subscribe(data=>{

        this.collection1=data
          this.punetmp=this.collection1.main["temp"]
          this.punetmp =this.punetmp - 273.15
          this.punemax=this.collection1.main["temp_max"]
          this.punemax=this.punemax - 273.15
          this.punemin=this.collection1.main["temp_min"] 
          this.punemin=this.punemin -273.15

        })

          ds.getcurrentdata("mumbai").subscribe(data=>{

            this.coll2=data
              this.mumtmp=this.coll2.main["temp"]
              this.mumtmp =this.mumtmp - 273.15
              this.mummax=this.coll2.main["temp_max"]
              this.mummax =this.mummax - 273.15
              this.mummin=this.coll2.main["temp_min"] 
              this.mummin =this.mummin - 273.15   })
    
              ds.getcurrentdata("delhi").subscribe(data=>{

                this.coll3=data
                  this.deltmp=this.coll3.main["temp"]
                  this.deltmp =this.deltmp - 273.15
                  this.delmax=this.coll3.main["temp_max"]
                  this.delmax =this.delmax - 273.15
                  this.delmin=this.coll3.main["temp_min"] 
                  this.delmin =this.delmin - 273.15 })

                  ds.getcurrentdata("chennai").subscribe(data=>{

                    this.coll4=data
                      this.chenntmp=this.coll4.main["temp"]
                      this.chenntmp =this.chenntmp - 273.15
                      this.chennmax=this.coll4.main["temp_max"]
                      this.chennmax =this.chennmax - 273.15
                      this.chennmin=this.coll4.main["temp_min"]
                      this.chennmin =this.chennmin - 273.15  })
        
                      ds.getcurrentdata("bangalore").subscribe(data=>{

                        this.coll5=data
                          this.bangtmp=this.coll5.main["temp"]
                          this.bangtmp =this.bangtmp - 273.15
                          this.bangmax=this.coll5.main["temp_max"]
                          this.bangmax =this.bangmax - 273.15
                          this.bangmin=this.coll5.main["temp_min"] 
                          this.bangmin =this.bangmin - 273.15})
          
  }
    formdata=new FormGroup({
          city:new FormControl(''), })    
            getdata(a:any){            
                          this.ds.getcurrentdata(a.city).subscribe(data=>{
                              console.warn(data)
                              this.collection=data
                              this.temp=this.collection.main["temp"]
                              this.temp =this.temp - 273.15
                              this.feelslike=this.collection.main["feels_like"]
                              this.feelslike =this.feelslike - 273.15
                             this.tempmax=this.collection.main["temp_max"]
                             this.tempmax=this.tempmax-273.15
                             this.tempmin=this.collection.main["temp_min"]
                             this.tempmin=this.tempmin-273.15
                            this.yes=true
                            this.yes1=false
                            this.yes2=false
                        },error=>{this.yes=false
                                  this.yes1=false
                                  this.yes2=true
                        })
                        this.formdata.reset("")
            }
  ngOnInit(): void {}
}
