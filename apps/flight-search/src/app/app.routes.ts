export const appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
    { path: 'home', loadChildren: () => import('@flight-search/shared/search').then((m) => m.SharedSearchModule) },
];