import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  mytrips: any;

  indate: any;
  outdate: any;
  hotel: any;
  description: any;

  constructor(private http: HttpClient) {
  }

  postdata() {
    const url = 'http://localhost:9999/trip';
    this.http.post(url, {
      indate: this.indate,
      outdate: this.outdate,
      hotel: this.hotel,
      description: this.description
    }).toPromise().then((data: any) => {
      console.log(data);
    });
  }

  ngOnInit() {
     this.http.get<any>('http://localhost:9999/trip/all').subscribe(data => {
      this.mytrips = data;
    });
  }


}


