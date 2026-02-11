import { Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { Consulta } from './consulta/consulta';
import { Inicio } from './inicio/inicio';

export const routes: Routes = [
    { path: 'inicio', component: Inicio },
    { path: 'cadastro', component: Cadastro },
    { path: 'consulta', component: Consulta },
];
