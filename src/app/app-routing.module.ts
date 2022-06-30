import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StatsComponent } from './pages/stats/stats.component';
import { ContactResolverService } from './service/contact-resolver.service';

const routes: Routes = [
  { path: 'contact/edit/:id', component: EditContactComponent, resolve: {contact: ContactResolverService} },
  { path: 'contact/edit', component: EditContactComponent },
  { path: 'contact/:id', component: ContactDetailsComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuardGuard]},

  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
