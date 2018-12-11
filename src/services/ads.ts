import { Injectable } from "@angular/core";
import{HttpClient} from "@angular/common/http";

@Injectable()
export class AdsProvider{
    constructor(public http: HttpClient){

    }
    allAds(){
        return this.http.get('/json/ads.json');
    }
}
