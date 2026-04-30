import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductData } from '../Services/Product/product-data';


@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-crud.html',
  styleUrl: './product-crud.css'
})
export class ProductCrud implements OnInit {
  private fb = inject(FormBuilder);
  private productService = inject(ProductData);
  private ref = inject(ChangeDetectorRef);

  productForm: FormGroup;
  productList: any[] = [];
  isEditing = false;
  editingProductId: number | null = null;
  isLoading = false;
  errorMessage: string | null = null;
  currentPage = 0;
  itemsPerPage = 12;

  constructor() {
    this.productForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(1)]],
      description: ['', [Validators.required]],
      categoryId: [1, [Validators.required]],
      imageUrl: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(append: boolean = false): void {
    this.isLoading = true;
    this.productService.getData(this.currentPage * this.itemsPerPage, this.itemsPerPage).subscribe({
      next: (data: any) => {
        if (append) {
          this.productList = [...this.productList, ...data];
        } else {
          this.productList = data;
        }
        this.isLoading = false;
        this.ref.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching products:', err);
        this.isLoading = false;
      }
    });
  }

  loadMore(): void {
    this.currentPage++;
    this.fetchProducts(true);
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const { imageUrl, ...otherData } = this.productForm.value;
      const productData = {
        ...otherData,
        images: [imageUrl]
      };

      if (this.isEditing && this.editingProductId !== null) {
        this.productService.updateData(productData, this.editingProductId).subscribe({
          next: (res) => {
            console.log('Product updated:', res);
            this.resetForm();
            this.fetchProducts();
          },
          error: (err) => {
            console.error('Error updating product:', err);
            this.errorMessage = err.error?.message || 'Failed to update product. Try a unique title.';
          }
        });
      } else {
        // Appending a small random string to ensure title uniqueness for the Mock API
        const uniqueProductData = {
          ...productData,
          title: `${productData.title} - ${Math.floor(Math.random() * 1000)}`
        };

        this.productService.addData(uniqueProductData).subscribe({
          next: (res) => {
            console.log('Product added:', res);
            this.errorMessage = null;
            this.resetForm();
            this.currentPage = 0; // Reset to first page to see the new product
            this.fetchProducts();
          },
          error: (err) => {
            console.error('Error adding product:', err);
            this.errorMessage = err.error?.message || 'Failed to add product. Try a unique title.';
          }
        });
      }
    }
  }

  editProduct(product: any): void {
    this.isEditing = true;
    this.editingProductId = product.id;
    this.productForm.patchValue({
      title: product.title,
      price: product.price,
      description: product.description,
      categoryId: product.categoryId || 1,
      imageUrl: product.images && product.images.length > 0 ? product.images[0] : 'https://picsum.photos/640/480'
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteData(id).subscribe({
        next: () => {
          console.log('Product deleted');
          this.fetchProducts();
        },
        error: (err) => console.error('Error deleting product:', err)
      });
    }
  }

  resetForm(): void {
    this.productForm.reset({
      title: '',
      price: '',
      description: '',
      categoryId: 1,
      imageUrl: ''
    });
    this.isEditing = false;
    this.editingProductId = null;
    this.errorMessage = null;
  }
}
