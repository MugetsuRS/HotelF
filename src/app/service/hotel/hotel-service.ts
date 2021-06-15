import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private hotelUrl = environment.server + '/hotel';

  constructor(private httpClient: HttpClient) {
  }

  getById(hotelId: number): any {
    return this.httpClient.get<any>(this.hotelUrl + '/' + hotelId);
  }
}
