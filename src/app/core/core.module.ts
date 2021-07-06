import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 *
 * In the Core Module we commonly place our singleton services and modules that will be used across the app but only need to be imported once.
 *
 */
@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
