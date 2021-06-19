import { NgModule } from '@angular/core';
import { CmsConfig, provideConfig } from "@spartacus/core";
import { SmartEditConfig, SmartEditRootModule, SMART_EDIT_FEATURE } from "@spartacus/smartedit/root";

@NgModule({
  declarations: [],
  imports: [
    SmartEditRootModule
  ],
  providers: [provideConfig(<CmsConfig>{
    featureModules: {
      [SMART_EDIT_FEATURE]: {
        module: () =>
          import('@spartacus/smartedit').then((m) => m.SmartEditModule),
      },
    }
  }),
  provideConfig(<SmartEditConfig>{
    smartEdit: {
      storefrontPreviewRoute: 'cx-preview',
      allowOrigin: 'localhost:9002, 127.0.0.1:9002, *.taloscommerce.com:80, *.taloscommerce.com:443',
    },
  })
  ]
})
export class SmartEditFeatureModule { }
