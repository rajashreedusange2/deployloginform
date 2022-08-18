import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveForm';

    myReactiveForm = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    })
    loginUser(){
      console.log(this.myReactiveForm.value)
      alert("Login successfully.")
    }
    get username(){
      return this.myReactiveForm.get('username');
    }
    get password(){
      return this.myReactiveForm.get('username');
    }
}
