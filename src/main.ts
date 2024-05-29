import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { GlobalWorkerOptions } from 'pdfjs-dist';

// Set the workerSrc property
GlobalWorkerOptions.workerSrc = `./assets/pdf.worker.min.js`;
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
