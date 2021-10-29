import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {
  user1!: string;
  myData:any;
  li:any;
  lis=[];
  constructor(private service: CommonService) { }
  openDialog()
  {
    console.log("print")
  }
  ngOnInit(): void {
    this.service.getdata().subscribe((response: any) => {
      this.myData = response;
      console.log(response);
    });
  }

}
