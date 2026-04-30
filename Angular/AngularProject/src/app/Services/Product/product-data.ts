import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductData {
  http = inject(HttpClient);

  productsApi = "https://api.escuelajs.co/api/v1/products";

  getData(offset: number = 0, limit: number = 12){
    return this.http.get(`${this.productsApi}?offset=${offset}&limit=${limit}`);
  }

  addData(data:any){
    return this.http.post(this.productsApi,data);
  }

  updateData(data:any, id:number){
    return this.http.put(`${this.productsApi}/${id}`,data);
  }

  deleteData(id:number){
    return this.http.delete(`${this.productsApi}/${id}`);
  }
}
