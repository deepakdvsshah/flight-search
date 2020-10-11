---
---

# Add/Update Product

## Document History

| **Version Number** |  **Date**  | **Edited by** | **Change/Comments**  |
| :----------------: | :--------: | :-----------: | :------------------: |
|        1.0         | 11-09-2020 |  Deepak Shah  | Intial Documentation |

## Introduction

```
This is a application which contains one header footer and add dependency from two feature i.e, product list and Add product.
Its contains two tabs, one is home which is for product list and other is Add product.
```

## Preconditions

To integrate feature to application there are two ways.
1.load children
{ path: 'home', loadChildren: () => import('@exam/list').then((m) => m.SharedListModule) },
{ path: 'addProduct/:id', loadChildren: () => import('@new/shared/add-product').then((m) => m.SharedAddProductModule) }
2.html binding
<new-list-view></new-list-view>
<new-add-product></new-add-product>

## Logic

**Product List**
To add product list we need to list view feature into app module.
Ex. { path: 'home', loadChildren: () => import('@exam/list').then((m) => m.SharedListModule) },

**Add Product**
To add product list we need to add product list feature into app module.
Ex. { path: 'addProduct/:id', loadChildren: () => import('@new/shared/add-product').then((m) => m.SharedAddProductModule) }

**Update Product**
To add product list we need to add product/Edit list feature into app module.
Ex. { path: 'addProduct/:id', loadChildren: () => import('@new/shared/add-product').then((m) => m.SharedAddProductModule) }

## Postconditions

After intigration of two feature we can use through routing.
click of home tab we can fetch the product list.
click of add product we can jump into add/edit product screen.

## Dependency

App contains two feature which mentioned at below links:

[Product list](../../libs/shared/list/documentation/product-list-technical.md)

[Add Product](../../libs/shared/add-product/documentation/add-product-technical.md)
