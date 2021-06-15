import {Component, OnInit} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';


export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  stars: FormGroup = this.fb.group({
    th1: false,
    th2: false,
    th3: false,
    th4: false,
    th5: false
  });

  style: FormGroup = this.fb.group({
    modern: '',
    classic: ''
  });

  wifi: FormGroup = this.fb.group({
    yes: false,
    no: false
  });

  breakfest: FormGroup = this.fb.group({
    yes: false,
    no: false
  });

  pool: FormGroup = this.fb.group({
    yes: false,
    no: false
  });

  price: FormGroup = this.fb.group({
    min: '',
    max: ''
  });

  hotels: any;
  city: any;

  opened = true;

  value = '';
  value1 = '';
  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'warn',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'}
    ]
  };
  allComplete = false;

  constructor(private http: HttpClient,
              private fb: FormBuilder) {
  }

  ngOnInit(): any {
    this.http.get<any>('http://localhost:9999/city/1').subscribe(data => {
      if (data) {
        localStorage.setItem('qwerty', JSON.stringify(data.hotel));
      }
      this.hotels = data.hotel;
    });
  }

  updateAllComplete(): any {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean): any {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

  filter(): void {
    let th1: any;
    if (this.stars.controls.th1) {
      th1 = this.stars.controls.th1.value;
    }

    let th2: any;
    if (this.stars.controls.th2) {
      th2 = this.stars.controls.th2.value;
    }
    let th3: any;
    if (this.stars.controls.th3) {
      th3 = this.stars.controls.th3.value;
    }

    let th4: any;
    if (this.stars.controls.th4) {
      th4 = this.stars.controls.th4.value;
    }
    let th5: any;
    if (this.stars.controls.th5) {
      th5 = this.stars.controls.th5.value;

    }
    let modern: any;
    if (this.style.controls.modern) {
      modern = this.style.controls.modern.value;
    }

    let classic: any;
    if (this.style.controls.classic) {
      classic = this.style.controls.classic.value;
    }

    let wifiYes: any;
    if (this.wifi.controls.yes) {
      wifiYes = this.wifi.controls.yes.value;
    }

    let wifiNo: any;
    if (this.wifi.controls.no) {
      wifiNo = this.wifi.controls.no.value;
    }

    let breakrestNo: any;
    if (this.breakfest.controls.yes) {
      breakrestNo = this.breakfest.controls.yes.value;
    }

    let breakrestYes: any;
    if (this.breakfest.controls.no) {
      breakrestYes = this.breakfest.controls.no.value;
    }

    let poolYes: any;
    if (this.pool.controls.yes) {
      poolYes = this.pool.controls.yes.value;
    }

    let poolNo: any;
    if (this.pool.controls.no) {
      poolNo = this.pool.controls.no.value;
    }

    let priceMin: any;
    if (this.price.controls.min) {
      priceMin = this.price.controls.min.value;
    }

    let priceMax: any;
    if (this.price.controls.max) {
      priceMax = this.price.controls.max.value;
    }

    // console.log(this.cookieService.get('hotels'));
    // const qwerty: any = JSON.parse(this.cookieService.get('hotels')).hotels;
    const ewr = localStorage.getItem('qwerty');

    let qwerty = [];
    if (ewr) {
      qwerty = JSON.parse(ewr);
    }

    const filtered: any = [];

    qwerty.forEach((h: any) => {
      if (th1 && '1' === h.stars) {
        filtered.push(h);
      }
      if (th2 && '2' === h.stars) {
        filtered.push(h);
      }
      if (th3 && '3' === h.stars) {
        filtered.push(h);
      }
      if (th4 && '4' === h.stars) {
        filtered.push(h);
      }
      if (th5 && '5' === h.stars) {
        filtered.push(h);
      }
      if (modern && 'Modern' === h.style) {
        filtered.push(h);
      }
      if (classic && 'Classic' === h.style) {
        filtered.push(h);
      }
      if (wifiYes && wifiYes === h.wifi) {
        filtered.push(h);
      }
      if (wifiNo && wifiNo !== h.wifi) {
        filtered.push(h);
      }
      if (breakrestNo && breakrestNo !== h.breakfast) {
        filtered.push(h);
      }
      if (breakrestYes && breakrestYes === h.breakfast) {
        filtered.push(h);
      }
      if (poolNo && poolNo !== h.pool) {
        filtered.push(h);
      }
      if (poolYes && poolYes === h.pool) {
        filtered.push(h);
      }
      if (priceMin && Number(priceMin) <= Number(h.price1.slice(0, -1))) {
        filtered.push(h);
      }
      if (priceMax && Number(priceMax) >= Number(h.price1.slice(0, -1))) {
        filtered.push(h);
      }
    });

    this.hotels = filtered;
  }
}
