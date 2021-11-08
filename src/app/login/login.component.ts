import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  http: any;
  constructor(private fb: FormBuilder, private service: CommonService,private router:Router) { }
loginform=this.fb.group({
  username: ['', Validators.required],
  password: ['', Validators.required]
})
  ngOnInit(): void {
  }
  login()
    {   console.log("hello")
      this.service.submit(this.loginform.value).subscribe(res => {
        console.log(res.token)
        localStorage.setItem('token','bmF6aW1AbmltYXBpbmZvdGVjaC5jb206dGVzdEAxMjM=');
        this.router.navigate(['/leads'])
      
      })
      
  }

}

