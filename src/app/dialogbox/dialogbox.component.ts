import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {
  LeadName: any;
  MobileNo: any;
  myData1: any;
  constructor(private fb: FormBuilder, private service: CommonService,public dialogRef: MatDialogRef<DialogboxComponent>) { }
submitdata()
{
  console.log(this.LeadName,this.MobileNo)
  this.service.submit1(this.addLead.value).subscribe((response: any) => {
    this.dialogRef.close(true);
    this.myData1 = response;
      console.log(response);
  })
}
addLead=this.fb.group({
  LeadName: ['', Validators.required],
  MobileNo: ['', Validators.required]
})
  ngOnInit(): void {
  }
// validate()
// {
//   let a=this.addLead.controls["MobileNo"].value.toString();
//   if(a.length == 10){
//     a= a.substring(0, a.length-1);
//     let b = parseInt(a);
//     this.addLead.controls['MobileNo'].setValue(b)
//   }else {
//     let b = parseInt(a);
//     this.addLead.controls['MobileNo'].setValue(b)
//   }

// }
}
