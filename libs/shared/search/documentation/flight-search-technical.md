---
---

# Home : Flight Search

## Document History

| **Version Number** |  **Date**  | **Edited by** |  **Change/Comments**  |
| :----------------: | :--------: | :-----------: | :-------------------: |
|        1.0         | 11-10-2020 |  Deepak Shah  | Initial Documentation |

## Introduction

```
This is a feature which can be inject in any of the angular application.
This feature featch all products and show them to screen.
```

## Preconditions

To integrate this feature we need to add dependency into application module file along with route file.
Ex. { path: 'home', loadChildren: () => import('@exam/list').then((m) => m.SharedListModule) },
OR
Ex. <new-list-view></new-list-view>

## Logic

**Fetch Products**

In Fetch product getting all new product in to list.for this we have one feature called list.
In this feature fetching product list and calling to state.
In NGXS, states are classes along with decorators to describe metadata and action mappings. So created a states folder inside src >> app and inside that folder, created one file called
list view state and one action file into same folder.
one more folder called services.in this class all https request (get,patch,delete,set,post) available.
component to state calling data to service.

The store is a global state manager that dispatches actions your state containers listen to and provides a way to select data slices out from the global state.

# Select

in component data binding through @select.
Selects are functions that slice a specific portion of state from the global state container.
In NGXS, there are two methods to select state, we can either call the select method on the Store service or use the @Select decorator. First let's look at the @Select decorator.

Select Decorators
Ex. @Select(ProductState.getProductList) productList: Observable<Product[]>;

Store Select Function
Ex. this.store.select(state => state.getProductList)

# Creating actions

An action example in list-view.actions.ts.

Ex. export class DeleteProduct {
static readonly type = ListViewActionType.DELETE;
constructor(public id: string) {
}
}

# Dispatching actions from component

    1.Internal action
    2.simple action
    3.action with metadata

To dispatch actions, you need to inject the Store service into your component/service and invoke the dispatch function with an action or an array of actions you wish to trigger.like this

Ex. this.store.dispatch(new DeleteProduct(id))

# Defining a State

States are classes along with decorators to describe metadata and action mappings.

After dispatch it will go to action then state after that it will call http call from service

Ex. return this.http.delete(`https://comlyn.com/rnd/api/product/${uuid}`);

# Snapshots

You can get a snapshot of the state by calling store.snapshot(). This will return the entire value of the store for that point in time.

Ex. const productList = this.store.selectSnapshot(ProductState.getProductList);

1st way to add
for this feature we need to add

Ex. { path: 'home', loadChildren: () => import('@exam/list').then((m) => m.SharedListModule) },

2nd way to add
<new-list-view></new-list-view>

## Post-conditions

After this all product list showing into UI.
