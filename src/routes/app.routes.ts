import { Routes } from '@angular/router';
import { MainScreenComponent } from '../screens/main-screen/main-screen.component';

const title: string = 'Mi Primera Aplicación';

export const routes: Routes = [
    { path: '', redirectTo: 'menu', pathMatch: 'full' },
    { path: 'menu', component: MainScreenComponent, title: title },
];