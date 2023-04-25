import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductListFormComponent } from './product-list-form/product-list-form.component'
import { ProductListService } from '../product-list.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products = this.proListService.getAllProducts()



  constructor(public dialog: MatDialog, private proListService: ProductListService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductListFormComponent, {
      width: '500px',
    });
  }

  
  

  removeProduct(id: number) {
    //console.log(id);
    this.proListService.removeProduct(id)
  }

  editProduct(data:Product) {
    const dialogRef = this.dialog.open(ProductListFormComponent, {
      width: '500px',
      data: data
    });
  }


  share() {
    alert('App has been shared')
    //console.log(this.products);
  }

  onNotify() {
    alert('You will be notified when the product goes on sale')
  }
}
