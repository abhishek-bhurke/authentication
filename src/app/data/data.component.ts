import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../common.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Data } from '@angular/router';
import { EditdialogComponent } from './editdialog/editdialog.component';
import { MatDialog } from '@angular/material/dialog';
import { splitClasses } from '@angular/compiler';
export interface PeriodicElement {
  name: string;
  email: string;
  gender: string;
  phone: number;
}

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'email', 'gender', 'phone', 'editform'];
  dataSource = new MatTableDataSource();
  users: any;
  timer:any;
  longText = 'This is data page. This is data page. This is data page. This is data page. ';
  arrayelements:Array<string>=['hello','bird','table','football','pipe','code'];
  array1:Array<string>=[];
  itemarray:Array<string>=[];
  constructor(private service: CommonService, private dialog: MatDialog) { }
  @ViewChild(MatPaginator, { static: true }) paginator: any;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.retrieveUser();
  }
  ngOnInit(): void {
    this.timer=setInterval(
      () =>{
        this.itemarray.push('this is data component');
      },100000
    )
    this.arrayelements.forEach((value) =>
    { 
      let first= value.substr(0,1).toUpperCase();
      let a= first + value.substr(1);
      this.array1.push(a);
    });
  }
  retrieveUser() {
    this.service.retrieveUser().subscribe((response: any) => {
      this.dataSource.data = response
      console.log(response)
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  logout()
  {
    localStorage.removeItem('token'); 
  }   
  openDialog(data:any) {
    const dialogRef = this.dialog.open(EditdialogComponent, {
      width: '400px',
      data:{data}
      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(this.dataSource.data)

      let index = this.dataSource.data.findIndex((x:any) => x.phone == result.phone);
      this.dataSource.data.splice(index,1,result);
      console.log(this.dataSource.data)

     
    });
  } 
}

