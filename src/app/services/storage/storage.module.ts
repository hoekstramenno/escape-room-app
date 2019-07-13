import { NgModule } from '@angular/core';
// import { SecureStorage } from '@ionic-native/secure-storage/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


@NgModule({
    providers: [
        NativeStorage,
        // SecureStorage,
    ],
})
export class StorageModule {
}
