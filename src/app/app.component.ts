import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAwyc7ntNWXWrbcXoK8FA9D_5AeTULbXlY',
      authDomain: 'blog-8c424.firebaseapp.com',
      databaseURL: 'https://blog-8c424.firebaseio.com',
      projectId: 'blog-8c424',
      storageBucket: '',
      messagingSenderId: '624201396514',
      appId: '1:624201396514:web:f19669cba99376ab'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

}
