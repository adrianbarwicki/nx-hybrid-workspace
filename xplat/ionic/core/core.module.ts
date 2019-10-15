import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { throwIfAlreadyLoaded } from '@nx-hybrid-workspace/utils';
import { NxHybridWorkspaceCoreModule } from '@nx-hybrid-workspace/web';

@NgModule({
  imports: [NxHybridWorkspaceCoreModule, IonicModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
export class NxHybridWorkspaceIonicCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: NxHybridWorkspaceIonicCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'NxHybridWorkspaceIonicCoreModule');
  }
}
