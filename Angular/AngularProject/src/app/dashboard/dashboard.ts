import { ProductData } from './../Services/Product/product-data';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard  implements OnInit{
  productData=inject(ProductData);
  ref=inject(ChangeDetectorRef);
  productList !:any;

ngOnInit(){
  this.fetchData();

}
fetchData()
{
  this.productData.getData().subscribe({
    next:(a)=>{
      this.productList=a;
      this.ref.detectChanges(),
      console.log(a);
    },
    error:(err)=> console.log(err),
    complete:()=> console.log('completed'),
  });
}
val={
  "title": "Product112",
  "price": 45000,
  "description": "A description",
  "categoryId": 4,
  "images": ["https://images.pexels.com/photos/19335258/pexels-photo-19335258.jpeg?cs=srgb&dl=pexels-masoodaslami-19335258.jpg&fm=jpg"]
}
createResourceInApi()
{
  this.productData.addData(this.val).subscribe({
    next:(v)=>{console.log(v),
      this.ref.detectChanges()
    },
    error:(err)=>console.log(err),
    complete:()=>{console.log('Resource created');

    }
  });
}
update()
{
  this.productData.updateProduct(this.val,208).subscribe({
    next:(v)=>{
      console.log(v);
      this.ref.detectChanges();
    },
    error:(err)=>{
      console.log(err);
    },
    complete:()=>{
      console.log("resource updated");
    }
  })
}
delete(){
  this.productData.delete(258).subscribe({
    next:(v)=>{
      console.log(v);
      this.ref.detectChanges();
    },
    error:(err)=>{
      console.log((err));
    },
    complete:()=>{console.log("delete");
    }
  })
}

}
