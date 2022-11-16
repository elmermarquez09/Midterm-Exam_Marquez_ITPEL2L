import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  name: any;
  gender: any;
  email: any;
  contact_number: any;
  home_address: any;


  constructor(public _apiService: ApiService) {}

  //Function for creating student record
  addStudent() {
    //console.log(this.student_number, this.student_name, this.email);
    let data = {
      name: this.name,
      gender: this.gender,
      email: this.email,
      contact_number: this.contact_number,
      home_address: this.home_address

    }

    this._apiService.addStudent(data).subscribe((res: any) => {
      console.log("Success == ", res)
      this.name = '';
      this.gender = '';
      this.email = '';
      this.contact_number = '';
      this.home_address = '';
      alert("SUCCESS");
    }, (error: any) => {
      alert("ERROR")
      console.log("Error = ", error)
    });
  }

}
