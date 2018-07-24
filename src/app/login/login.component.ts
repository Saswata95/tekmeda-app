import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  state: string = '';
  error: any;
  constructor(public af: AngularFireAuth, private router: Router) {
    this.af.authState.subscribe(auth => { 
      if(auth) {
        this.router.navigateByUrl('/dashboard');
      }
    });
   }

  ngOnInit() {
  }

  loginUser(event) {
      console.log(event.value);
      const target = event.target;
      const emailid = target.querySelector('#email').value;
      const passw = target.querySelector('#password').value;

      this.af.auth.signInWithEmailAndPassword(emailid, passw).then(
        (success) => {
        console.log(success);
        this.router.navigate(['/user/dashboard']);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
  }

}
