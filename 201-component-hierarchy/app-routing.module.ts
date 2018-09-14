import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'email', pathMatch: 'full' },
  { path: 'help', loadChildren: './help/help.module#HelpModule' },
  { path: 'email', loadChildren: './email/email.module#EmailModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
