import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { TutorialesComponent } from './components/tutoriales/tutoriales.component';
import { ErrorComponent } from './components/error/error.component';
//Constante
const appRoutes: Routes = [
    {path: '', component: TutorialesComponent},    
];

//Exportar rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);