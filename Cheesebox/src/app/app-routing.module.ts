import { NgModule } from '@angular/core';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { RouterModule, Routes } from '@angular/router';
import { AreaClientesComponent } from './componentes/area-clientes/area-clientes.component';
import { DetalleQuesoComponent } from './componentes/detalle-queso/detalle-queso.component';
import { DetalleRecetasComponent } from './componentes/detalle-recetas/detalle-recetas.component';
import { EditarDatosComponent } from './componentes/editar-datos/editar-datos.component';
import { EditarQuesoComponent } from './componentes/editar-queso/editar-queso.component';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';
import { FormularioAddQuesoComponent } from './componentes/formulario-add-queso/formulario-add-queso.component';
import { FormularioAddRecetasComponent } from './componentes/formulario-add-recetas/formulario-add-recetas.component';
import { FormularioRegistroComponent } from './componentes/formulario-registro/formulario-registro.component';
import { ListaQuesosComponent } from './componentes/lista-quesos/lista-quesos.component';
import { ListaRecetasComponent } from './componentes/lista-recetas/lista-recetas.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ListaQuesosComponent },
  { path: 'registrar', component: FormularioRegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'clientes', component: AreaClientesComponent },
  { path: 'quesos', component: ListaQuesosComponent },
  { path: 'recetas', component: ListaRecetasComponent },
  { path: 'update/:queso', component: FormularioAddQuesoComponent },
  { path: 'update/:recetas', component: FormularioAddRecetasComponent },
<<<<<<< HEAD
  { path: 'quesos/:idQueso', component: DetalleQuesoComponent },
  { path: 'recetas/:idReceta', component: DetalleRecetasComponent },
=======
  { path: 'quesos/:detalle', component: DetalleQuesoComponent },
  { path: 'recetas/:detalle', component: DetalleRecetasComponent },
  { path: 'editarQueso/:idQueso', component: EditarQuesoComponent },
  { path: 'editarDatos/:idUser', component: EditarDatosComponent },
>>>>>>> develop
  { path: 'favoritos', component: FavoritosComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
