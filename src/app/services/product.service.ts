import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    { id: 1, name: 'Nike V2K Run', description: 'The V2K remasters everything you love about the Vomero ina look pulled straight from an early \'00s running catalogue.', price: 6895, imageUrl: 'assets/img/shoe1.jpeg' },
    { id: 2, name: 'Nike Air Max 90', description: 'Produced at the cross section of art, music and culture, this champion running shoe helped define the \'90s.', price: 6595, imageUrl: 'assets/img/shoe2.jpeg' },
    { id: 3, name: 'Nike SB Vertebrae', description: 'The Vertebrae breaks in fast and breaks down slow, creating a consistent fit straight out of the box.', price: 4695, imageUrl: 'assets/img/shoe3.jpeg' },
    { id: 4, name: 'Nike Calm', description: 'Made from soft yet supported foam, the minimal design makes these mules easy to style with or without socks.', price: 3695, imageUrl: 'assets/img/shoe4.jpeg' },
    { id: 5, name: 'Nike SB Janoski+ Slip', description: 'The skate-specific tread delivers great boardfeel and flick, while the re-engineered last gives you better fit and comfort-opening the door to next-level performance.', price: 4695, imageUrl: 'assets/img/shoe5.jpeg' }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
