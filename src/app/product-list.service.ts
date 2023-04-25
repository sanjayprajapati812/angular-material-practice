import {
  Injectable
} from '@angular/core';
import {
  Product
} from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  products: Product[] = [
    {
      id: 1,
      name: 'iphone 14',
      price: 150000,
      description: 'this is appale iphone brad new phone'
    },
    {
      id: 2,
      name: 'apple air buds new',
      price: 7866,
      description: 'this have awesome sound'
    },
    {
      id: 3,
      name: 'apple watch',
      price: 50000,
      description: 'this watch show your time'
    },
  ];

  addProduct(product: Product) {
    this.products.push(product)
  }

  getAllProducts() {
    return this.products;
  }

  getByID(id: number) {
    return this.products.find((el) => {
      return el.id === id
    })
  }

  updateProduct(id: number, data: Product) {
    let uData = this.getByID(id) || {
      name: '', price: 0, description: ''
    }
    //console.log(data,uData);

    uData.name = data.name,
      uData.description = data.description,
      uData.price = data.price
  }

  removeProduct(id: number) {
    let index = this.products.findIndex((el) => {
      return el.id === id
    })
    this.products.splice(index,
      1)
  }

  constructor() { }
}