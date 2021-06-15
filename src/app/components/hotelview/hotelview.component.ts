import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {HotelService} from '../../service/hotel/hotel-service';

@Component({
  selector: 'app-hotelview',
  templateUrl: './hotelview.component.html',
  styleUrls: ['./hotelview.component.css']
})

export class HotelViewComponent implements OnInit, OnDestroy {
  subscription: Subscription[] = [];
  hotelId: number | undefined;
  hotel: any | undefined;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private hotelService: HotelService) {
  }

  ngOnInit(): void {
    this.subscription.push(
      this.activatedRoute.params.subscribe((data: any) => {
        this.hotelId = data['hotel-id'];
      })
    );

    if (this.hotelId) {
      this.subscription.push(
        this.hotelService.getById(this.hotelId).subscribe((data: any) => {
          this.hotel = data;
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscription.forEach(s => {
      s.unsubscribe();
    });
  }

}
