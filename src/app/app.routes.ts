import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccueilComponent } from './gateway-paiment/components/accueil/accueil.component';
import { TraiteurPaiementComponent } from './gateway-paiment/components/traiteur-paiement/traiteur-paiement.component';

export const routes: Routes = [
    {
        path: '',
        component: AccueilComponent,
        children: [
            {
                path: 'getway-paiment',
                loadChildren: () => import('./gateway-paiment/gateway-paiment.module').then(m => m.GatewayPaimentModule)
            },
           
        ]
    },

    {
        path: 'traitement',
        component: TraiteurPaiementComponent
    },
    
    {
        path: '',
        loadChildren: () => import('./gateway-paiment/gateway-paiment.module').then(m => m.GatewayPaimentModule)
    },

];
