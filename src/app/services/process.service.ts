import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  globalUserList: any = [];
  brandList = new Subject<any>();
  brand = this.brandList.asObservable();
  constructor() { }

  sendMessage(brand: any) {
    this.brandList.next(brand);
  }


  generateImageUrl(imagesize = "400", count = 1, blur = 3, grayscale = false) {
    /*   let f = (a, b) => [].concat(...a.map(a => b.map(b => [].concat(a, b))));
      let cartesian = (a, b, ...c) => b ? cartesian(f(a, b), ...c) : a;
      
      let output =  cartesian([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ['grayscale']); */
    
      let url = 'https://picsum.photos/';
      let allurl: any = [];
      let res = Array(count).fill(null).map((o) => {
        let tu = url + imagesize;
        
        // works with random always
        /* tu += '?random='+ Math.random();
        tu += blur ? '&blur=' + Number(blur) : '';
        tu += grayscale ? '&grayscale' : ''; */
        
        let paramsArray = [];
        if (blur) paramsArray.push('blur=' + Number(blur));
        if (grayscale) paramsArray.push('grayscale');
        paramsArray.push('random='+ Math.random());
        
        let params = paramsArray.join('&');
      
        allurl.push(tu + '?' + params);
      });
      console.log(allurl);
      return allurl;
    }
}
