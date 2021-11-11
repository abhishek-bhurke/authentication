import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef ,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from 'src/app/common.service';
@Component({
  selector: 'app-editdialog',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.css']
})
export class EditdialogComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: CommonService,public dialogRef: MatDialogRef<EditdialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }
  editdata:FormGroup=this.fb.group({}) ;
  ngOnInit(): void {
    this.initializeForm();
    console.log(this.data)
    this.editdata.patchValue(this.data.data);
  }
  initializeForm()
  {
    this.editdata=this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      gender:[''],
      phone: ['', Validators.required]
    })
  }
 
submitdata()
{

this.dialogRef.close( this.editdata.value);
}
}
