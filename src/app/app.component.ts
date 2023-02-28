import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerForm !:FormGroup
  title = 'formulario';
  submitted=false;
  constructor(private formBuilder: FormBuilder){
  }
  ngOnInit(){
    this.registerForm=this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
  onSubmit(){
    this.submitted=true;
    //detiene el proceso si la forma es invalida
    if(this.registerForm.invalid){
      return ;
    }else{
      alert("SUCCESS")
    }
  }

}
