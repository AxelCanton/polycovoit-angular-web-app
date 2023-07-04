import { Routes } from "@angular/router";
import { AuthPageComponent } from "src/features/auth/auth-page/auth-page.component";
import { MapPageComponent } from "src/features/map/map-page/map-page.component";
import { ParametersPageComponent } from "src/features/parameters/parameters-page/parameters-page.component";

const routes: Routes = [
    {
        path: '',
        component: AuthPageComponent
    },
    {
        path: 'map',
        component: MapPageComponent
    },
    {
        path: 'reservations',
        component: AuthPageComponent
    },
    {
        path: 'requests',
        component: AuthPageComponent
    },
    {
        path: 'parameters',
        component: ParametersPageComponent
    },
];

export default routes;