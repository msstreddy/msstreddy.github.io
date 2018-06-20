import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Http } from '@angular/http';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {
  idGroup: FormGroup;
  constructor(private httpService:Http) {
    this.idGroup=new FormGroup({
      firstName: new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)]),
      fullName: new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)]),
      designation: new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z ]+$/)]),
      employee_code: new FormControl(null,[Validators.required,Validators.pattern(/^8\d{6}$/)]),
      blood_grp:new FormControl('',Validators.required),
      reason:new FormControl('',Validators.required),
      email:new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z][a-zA-Z0-9]{3,}@virtusa.com$/)]),
      date_of_emp:new FormControl(null,Validators.required),
      mobile_num:new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]\d{9}$/)]),
      emg_cnct:new FormControl(null,[Validators.required,Validators.pattern(/^\d{10}$/)])
    });
   }
  
  ngOnInit() {
  }
  onSubmit()
  {
      console.log("in Submit");
      const url='https://id-application-15904.firebaseio.com/id-application-angular.json';
      this.httpService.post(url,this.idGroup.value).subscribe(res=>console.log(res));
  }

}
