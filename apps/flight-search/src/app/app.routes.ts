import { HomeComponent } from './home/home.component';
export const appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
    { path: 'search', loadChildren: () => import('@flight-search/shared/search').then((m) => m.SharedSearchModule) },
    { path: 'home', component: HomeComponent },
];