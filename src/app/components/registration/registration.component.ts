import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  name: String | undefined;
  surrname: String | undefined;
  password: String | undefined;
  email: String | undefined;
  pop: any;
  mytrips = [];
  myObject = {};

  constructor(private http: HttpClient) {
  }


  postdata() {
    const url = 'http://localhost:9999/accounts';
    this.http.post(url, {
      email: this.email,
      password: this.password,
      name: this.name,
      surrname: this.surrname,
      mytrips: this.mytrips
    }).toPromise().then((data: any) => {
      console.log(data);
    });
  }


  ngOnInit(): void {
    let mytrips = {
      indate: '2111',
      outdate: '2555',
      hotel: 'sdfsdf',
      description: 'Fuck'
    };

    let myarray = [];
    myarray.push(mytrips);
    console.log(myarray);
  }

}
