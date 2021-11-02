import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {
  user1!: string;
  myData:any;
  myData1:any;
  li:any;
  lis=[];
  data: any;
  constructor(private service: CommonService, private dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(DialogboxComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  } 
  logout()
  {
    localStorage.removeItem('token'); 
  }
  
  
  ngOnInit(): void {
    
      setTimeout(() => {
        this.service.getdata().subscribe((response: any) => {
          this.myData = response;
      console.log(response);
    });
      }, 1000);
      
  }

}
