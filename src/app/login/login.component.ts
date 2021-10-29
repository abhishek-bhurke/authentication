import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  http: any;
  constructor(private fb: FormBuilder, private service: CommonService) { }
loginform=this.fb.group({
  username: ['', Validators.required],
  password: ['', Validators.required]
})
  ngOnInit(): void {
  }
  login()
    {   
      this.service.submit(this.loginform.value).subscribe(res => {
      
      })
      
  }

}

