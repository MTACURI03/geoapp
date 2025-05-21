import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { IonicModule } from '@ionic/angular';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideIonicAngular } from '@ionic/angular/standalone';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(IonicModule.forRoot({})),
    provideIonicAngular(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore())
  ],
});