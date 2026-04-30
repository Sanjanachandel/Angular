import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { home } from './Home/home';
import { Nav } from './nav/nav';

import { Forms } from './forms/forms';
import { Wild } from './wild/wild';
import { Binding } from './binding/binding';
import { ReactiveForms } from './forms/reactive-forms/reactive-forms';
import { form } from '@angular/forms/signals';
import { ProductCrud } from './product-crud/product-crud';


export const routes: Routes = [{
    path:'',
    component:Nav
  },
  {
  path:'dashboard',
  component:Dashboard,

},
{
  path:'home',
  component:home,
  children:[
    {
    path:'binding',
    component:Binding
  },
  {
    path:'nav',
    component:Nav,
    children:[{
      path:'reg',
      component:Forms
    }]

  }
]
},{
  path:'nav',
  component:Nav
}
,{
  path:'form',
  component:Forms
},
{
        path: 'product-crud',
        component: ProductCrud
    },
    {
  path:'**',
  component:Wild
}

];
