import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductData {
  http=inject(HttpClient);
  productApi=" https://api.escuelajs.co/api/v1/products"
  getData()
  {
    return this.http.get(this.productApi);
  }
  addData(data:any){
    return this.http.post(this.productApi,data)
  }
  updateProduct(data:any,id:number)
  {
    return this.http.put(`${this.productApi}/${id}`,data)
  }
  delete(id:number){
    return this.http.delete(`${this.productApi}/${id}`)
  }
}
