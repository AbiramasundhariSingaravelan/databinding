import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataBindingDemo';
  username = 'Abiramasundhari'
  customType='text';
  customPlaceHolder='Enter your name';
  dynamicName="Arthi";
  greetUser()
  {
    alert('Welcome to Angular Data Binding')
  }
}
