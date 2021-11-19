import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './public/errors/not-found/not-found.component';
import { HomeComponent } from './public/general/home/home.component';

const routes: Routes = [
  
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home" 
  },
  {
    path: "security",
    loadChildren: () => import("./modules/security/security.module").then(x => x.SecurityModule)
  },
  {
    path: "parametrizacion",
    loadChildren: () => import("./modules/parametrizacion/parametrizacion.module").then(x => x.ParametrizacionModule)
  },
  {
    path: "jurado",
    loadChildren: () => import("./modules/jurado/jurado.module").then(x => x.JuradoModule)
  },
  {
    path: "proponente",
    loadChildren: () => import("./modules/proponente/proponente.module").then(x => x.ProponenteModule)
  },
  {
    path: "reportes",
    loadChildren: () => import("./modules/reportes/reportes.module").then(x => x.ReportesModule)
  },
  {
    path: "solicitud",
    loadChildren: () => import("./modules/solicitud/solicitud.module").then(x => x.SolicitudModule)
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
