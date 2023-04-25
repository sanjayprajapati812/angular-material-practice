import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/product';
import { ProductListService } from 'src/app/product-list.service';


@Component({
  selector: 'app-product-list-form',
  templateUrl: './product-list-form.component.html',
  styleUrls: ['./product-list-form.component.css']
})


export class ProductListFormComponent implements OnInit {

  static id: number = 4

  controlBtn: string = 'Submit'

  productListForm = this.formBuilder.nonNullable.group({
    id: [0],
    name: ['', Validators.required],
    price: [0, Validators.required],
    description: ['']
  });

  ngOnInit(): void {

    if (this.data) {
      this.controlBtn = 'Update'
      //console.log(this.data)
      this.productListForm.patchValue({
        name: this.data.name,
        price: this.data.price,
        description: this.data.description
      })
    }
  }


  constructor(public dialogRef: MatDialogRef<ProductListFormComponent>,
    private formBuilder: FormBuilder,
    private proListService: ProductListService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onSubmit() {
    if (this.controlBtn == 'Submit') {
      this.productListForm.value.id = ProductListFormComponent.id
      this.proListService.addProduct(<Product>this.productListForm.value)
      //console.log(this.productListForm.value);
      ProductListFormComponent.id++
    } else {
      this.proListService.updateProduct(this.data.id,<Product>this.productListForm.value)
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
