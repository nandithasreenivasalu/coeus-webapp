import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
//import { MatDialog } from '@angular/material/dialog';
import { Inject, Injectable } from '@angular/core';
import { MatSelectModule} from '@angular/material/select'



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 selected='';
  date:Date=new Date();
  cardData = [{ id: 1, age: 70, sex: 'M', blink: true, f_name: 'Steven', l_name: 'Vasquerz', temp: '100', tempDegree: '\xB0F', bpm: 74, bpmDegree: 'bpm', oxygen: 98, step_count: 400, date_time: 20201210200115, fall: false, last_alert: '', image: 'y', updatedAt: new Date(this.date.getTime() + (20 * 60 * 1000)), redAlerts: ['Temp - 100 \xB0F', 'Travelled to Covid affected Zone'] },
  { id: 2, age: 71, sex: 'F', blink: true, f_name: 'Garima', l_name: '', temp: '102', tempDegree: '\xB0F', bpm: 74, bpmDegree: 'bpm', oxygen: 98, step_count: 400, date_time: 20201210200115, fall: true, last_alert: '', image: 'y', updatedAt: this.date, redAlerts: ['Temp - 102 \xB0F', 'Cough'] },
  { id: 3, age: 72, sex: 'M', blink: true, f_name: 'Rob', l_name: 'Larry', temp: '97.5', tempDegree: '\xB0F', bpm: 74, bpmDegree: 'bpm', oxygen: 98, step_count: 400, date_time: 20201210200115, fall: false, last_alert: '', image: 'y', updatedAt: new Date(this.date.getTime() + (2 * 60 * 1000)), redAlerts: ['Travelled to Covid affected Zone', 'Cold', 'Cough', 'Breathlessness'] },
  { id: 4, age: 73, sex: 'M', blink: true, f_name: 'Steve', l_name: 'Vil', temp: '97.5', tempDegree: '\xB0F', bpm: 74, bpmDegree: 'bpm', oxygen: 98, step_count: 400, date_time: 20201210200115, fall: false, last_alert: '', image: 'n', updatedAt: new Date(this.date.getTime() + (9 * 60 * 1000)), redAlerts: ['Was in touch a covid patient'] },
  { id: 5, age: 74, sex: 'F', blink: true, f_name: 'Lisa', l_name: '', temp: '100', tempDegree: '\xB0F', bpm: 74, bpmDegree: 'bpm', oxygen: 98, step_count: 400, date_time: 20201210200115, fall: false, last_alert: '', image: 'y', updatedAt: new Date(this.date.getTime() + (58 * 60 * 1000)), redAlerts: ['Temp - 100 \xB0F', 'Travelled to Covid affected Zone'] },
  { id: 6, age: 75, sex: 'M', blink: true, f_name: 'Harry', l_name: 'Potter', temp: '97.5', tempDegree: '\xB0F', bpm: 74, bpmDegree: 'bpm', oxygen: 98, step_count: 400, date_time: 20201210200115, fall: false, last_alert: '', image: 'y', updatedAt: new Date(this.date.getTime() + (10 * 60 * 1000)), redAlerts: [] },
  { id: 7, age: 76, sex: 'M', blink: true, f_name: 'Hero', l_name: '', temp: '97.5', tempDegree: '\xB0F', bpm: 74, bpmDegree: 'bpm', oxygen: 98, step_count: 400, date_time: 20201210200115, fall: false, last_alert: '', image: 'n', updatedAt: this.date, redAlerts: [] },
  { id: 8, age: 77, sex: 'M', blink: true, f_name: 'Darren', l_name: 'Will', temp: '97.5', tempDegree: '\xB0F', bpm: 74, bpmDegree: 'bpm', oxygen: 98, step_count: 400, date_time: 20201210200115, fall: false, last_alert: '', image: 'y', updatedAt: new Date(this.date.getTime() + (46 * 60 * 1000)), redAlerts: [] },
  { id: 9, age: 78, sex: 'M', blink: true, f_name: 'Andrew', l_name: 'Gilbert', temp: '97.5', tempDegree: '\xB0F', bpm: 74, bpmDegree: 'bpm', oxygen: 98, step_count: 400, date_time: 20201210200115, fall: false, last_alert: '', image: 'y', updatedAt: new Date(this.date.getTime() + (7 * 60 * 1000)), redAlerts: ['Travelled to Covid affected Zone'] },
  { id: 10, age: 79, sex: 'F', blink: true, f_name: 'Fiza', l_name: 'Lee', temp: '97.5', tempDegree: '\xB0F', bpm: 74, bpmDegree: 'bpm', oxygen: 98, step_count: 400, date_time: 20201210200115, fall: false, last_alert: '', image: 'y', updatedAt: new Date(this.date.getTime() + (23 * 60 * 1000)), redAlerts: [] },
  { id: 11, age: 80, sex: 'F', blink: true, f_name: 'Tanya', l_name: 'Mehta', temp: '97.5', tempDegree: '\xB0F', bpm: 74, bpmDegree: 'bpm', oxygen: 98, step_count: 400, date_time: 20201210200115, fall: true, last_alert: '', image: 'y', updatedAt: new Date(this.date.getTime() + (34 * 60 * 1000)), redAlerts: [] },
  { id: 12, age: 81, sex: 'M', blink: true, f_name: 'Lio', l_name: '', temp: '97.5', tempDegree: '\xB0F', bpm: 74, bpmDegree: 'bpm', oxygen: 98, step_count: 400, date_time: 20201210200115, fall: false, last_alert: '', image: 'y', updatedAt: new Date(this.date.getTime() + (19 * 60 * 1000)), redAlerts: [] }
  ]
  openUserCard:boolean=false;
  selectedUser=undefined;
  cardDataSorted = [];
  userName: string="";
  

  filterOptions=[
    {actual: 'Name', value: 'name'},
    {actual: 'Fall Alert', value: 'fallAlert'},
    {actual: 'Red Flags', value: 'redFlags'},
    {actual:'Updated At',value:'updatedAt'}];
  selectedFilterOption = 'fallAlert';

  
  constructor() {
       this.cardDataSorted = this.cardData;
  this.userName = "sree Ganesha" ;
    
  }
  
  onChange(selectedValue:any) {
    console.log("selectedValue ",selectedValue);
    this.selectedFilterOption = selectedValue;
    if(this.selectedFilterOption=='name')
      this.sortByName();
    else if(this.selectedFilterOption=='fallAlert')
      this.sortByFallAlert();
    else if(this.selectedFilterOption=='redFlags')
      this.sortByRedFlags();
    else if(this.selectedFilterOption=='updatedAt')
      this.sortByUpdatedAt();
}
  
sortByFallAlert(){
  let falls=[];
  let notfalls=[];
  this.cardData.filter((data)=>{
    if(data.fall)
      falls.push(data)
    else
      notfalls.push(data);
  });
  this.cardDataSorted=falls.concat(notfalls);
}
sortByName(){
  this.cardDataSorted=this.cardData
  this.cardDataSorted = _.sortBy( this.cardData, 'f_name' );
}
sortByRedFlags(){
  this.cardDataSorted=this.cardData
  this.cardDataSorted =_.sortBy( this.cardData, function( item ) { return -item.redAlerts.length; } )
}
sortByUpdatedAt(){
  this.cardDataSorted=this.cardData
  this.cardDataSorted =_.sortBy( this.cardData, function( item ) { return -item.updatedAt; } )
}
  
  ngOnInit(): void {
 //   this.cardDataSorted = this.cardData;
  }
  sidebarToggle() {
    var sidebar = document.getElementById('sidebar');
   
    if (sidebar != null) {
      
    
      if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
      } else {
        sidebar.style.display = "none";
      }
    }
}
  openUserCardFxn(selectedUser:any){
    this.selectedUser=selectedUser
    this.openUserCard=true;
  }
openAlertDialog(data:any){
    console.log("dialog")
    this.cardData.forEach((item)=>{
      if(item.id==data.id)
        item.blink=false
    })
    this.cardData.forEach((item)=>{
      if(item.id==data.id)
        item.blink=false
    })
    
  /*  const dialogRef = this.dialog.open(AlertComponent,{
      data:data,
      panelClass: 'alert-dialog',
   });
   dialogRef.updatePosition({top:'12vh'})
   dialogRef.afterClosed().subscribe(response => {
  });

  */
  }

 profileToggle() {
   var profileDropdown = document.getElementById('ProfileDropDown');
   if (profileDropdown != null) {
     if (profileDropdown.style.display === "block") {
       profileDropdown.style.display = "none";
     } else {
       profileDropdown.style.display = "block";
     }
   }
}

}