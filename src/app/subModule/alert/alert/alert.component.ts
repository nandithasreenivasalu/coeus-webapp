import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  selectedUser:any;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,private dialogRef: MatDialogRef<AlertComponent>) { }

  ngOnInit(): void {
    this.selectedUser=this.data;
  }
  closeAlert(){
    this.dialogRef.close();
  }

}
