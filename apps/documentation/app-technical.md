---
---

# Flight Search

## Document History

| **Version Number** |  **Date**  | **Edited by** | **Change/Comments**  |
| :----------------: | :--------: | :-----------: | :------------------: |
|        1.0         | 11-10-2020 |  Deepak Shah  | Intial Documentation |

## Introduction

```
This is a application which contains one header footer and add dependency from one feature i.e, search.
```

## Preconditions

To integrate feature to application there are two ways.
1.load children
{ path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
    { path: 'search', loadChildren: () => import('@flight-search/shared/search').then((m) => m.SharedSearchModule) },
    { path: 'home', component: HomeComponent },
2.html binding
<flight-search-search [showClose]="false" (searchClick)="handleSearchClick($event)"></flight-search-search>

## Logic

**Flight Search**
To search flights we need to integrate search feature into app module.
    { path: 'search', loadChildren: () => import('@flight-search/shared/search').then((m) => m.SharedSearchModule) },

## Postconditions

After intigration of search feature we can do flight searching.

## Dependency

App contains one feature which mentioned at below links:

[Flight Search](../../libs/shared/search/documentation/flight-search-technical.md)
