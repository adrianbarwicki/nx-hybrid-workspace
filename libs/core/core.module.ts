import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
  Inject
} from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';

// libs
import { TranslateService } from '@ngx-translate/core';
import { throwIfAlreadyLoaded } from '@nx-hybrid-workspace/utils';

// app
import { environment } from './environments/environment';
import { CORE_PROVIDERS, PlatformLanguageToken } from './services';
import { LogService } from './services/log.service';

/**
 * DEBUGGING
 */
LogService.DEBUG.LEVEL_4 = !environment.production;

export const BASE_PROVIDERS: any[] = [
  ...CORE_PROVIDERS,
  {
    provide: APP_BASE_HREF,
    useValue: '/'
  }
];

@NgModule({
  imports: [CommonModule]
})
export class CoreModule {
  // configuredProviders: *required to configure WindowService and others per platform
  static forRoot(configuredProviders: Array<any>): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [...BASE_PROVIDERS, ...configuredProviders]
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
    @Inject(PlatformLanguageToken) lang: string,
    translate: TranslateService
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');

    // ensure default platform language is set
    translate.use(lang);
  }
}
