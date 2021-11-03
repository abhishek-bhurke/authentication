import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
users:any
  constructor(private service:CommonService) { }
  register()
  {
    this.retrieveUser()
  }
  ngOnInit(): void {
    this.retrieveUser();
  }
  retrieveUser()
  {
    this.service.retrieveUser().subscribe((response: any)=>{
      this.users=response;
      console.log(response)
    })
  }
 

}
