import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard.guard';

const pageModule = () =>
  import('./pages/pages.module').then((m) => m.PagesModule);
const authModule = () => import('./auth/auth.module').then((m) => m.AuthModule);

const routes: Routes = [
  { path: '', loadChildren: authModule },
  { path: 'dashboard', loadChildren: pageModule },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
