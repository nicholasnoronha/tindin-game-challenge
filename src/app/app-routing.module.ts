import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ManagerComponent } from './components/manager/manager.component';
import { AuthGuard } from './services/auth/auth.guard';
import { GameDetailsComponent } from './components/game-details/game-details.component';

const routes: Routes = [
    { path: '', component: TelaInicialComponent},
    { path: 'login', component: LoginFormComponent, canActivate: [AuthGuard]},
    { path: 'home/games', component: ManagerComponent},
    { path: 'game/:gameId', component: GameDetailsComponent},
    { path: '**', component: PageNotFoundComponent},
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}