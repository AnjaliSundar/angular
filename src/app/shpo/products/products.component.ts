import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-Products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Products = ["Watch", "Snacks", "Gold", "Dresses"]

  constructor() { }

  ngOnInit() {
  }
giftme = function(counter){

  alert("Buy this things..:" + this.Products[counter]);

  console.log("Buy this things..:" + this.Products[counter]);
}
}
