import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../common.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
  displayedColumns: string[] = ['name', 'email', 'gender', 'phone'];
  dataSource = new MatTableDataSource();
  users: any;

  constructor(private service: CommonService) { }
  @ViewChild(MatPaginator, { static: true }) paginator: any;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.retrieveUser();
  }
  ngOnInit(): void {
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
}
