import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CalculadoraRoutingComponent } from './calculadora-routing.component';
import { CalculadoraComponent } from './components';

export const CalculadoraRoutes: Routes = [
    {
        path: 'calculadora',
        component: CalculadoraRoutingComponent,
        children: [
            {
                path: '',
                component: CalculadoraComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(CalculadoraRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CalculadoraRoutingModule {}