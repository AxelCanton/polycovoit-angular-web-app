import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { bootstrapApplication } from '@angular/platform-browser';
import routes from './app/routes';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
    providers: [
      provideAnimations(),
      provideRouter(routes),
      importProvidersFrom([HttpClientModule])
    ]
})
  .catch(err => console.error(err));
