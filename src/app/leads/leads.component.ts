import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  timer:any;
  itemarray:Array<string>=[];
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
      this.timer=setInterval(
        () =>{
          this.itemarray.push('this is leads component');
        },100000
      )
      // setTimeout(() => {
        this.service.getdata().subscribe((response: any) => {
          this.myData = response;
      console.log(response);
    });
      // }, 1000);
      
  }
  

}
