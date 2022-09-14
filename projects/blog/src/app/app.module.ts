import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FooterComponent, HeaderComponent, PageContainerComponent, VendorsModule} from '@vendors';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment, firebaseUiAuthConfig } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { FirebaseUIModule } from 'firebaseui-angular';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { initializeAppCheck, provideAppCheck, ReCaptchaV3Provider } from '@angular/fire/app-check';
import {MarkdownModule} from "ngx-markdown";
import { ServiceWorkerModule } from '@angular/service-worker';
import { NoAuthComponent } from './no-auth/no-auth.component';
import {SharedModule} from "@shared";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
    provideAppCheck(() => {
      const provider = new ReCaptchaV3Provider(environment.recaptcha3SiteKey)
      return initializeAppCheck(undefined, {provider, isTokenAutoRefreshEnabled: true})

    }),
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    MarkdownModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    PageContainerComponent
  ],
  providers: [
    ScreenTrackingService,UserTrackingService,
    {provide: FIREBASE_OPTIONS, useValue: environment.firebase}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
