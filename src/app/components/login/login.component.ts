import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: String | undefined;
  surrname: String | undefined;
  password: String | undefined;
  email: String | undefined;
  mytrips = [];

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

  }
}
