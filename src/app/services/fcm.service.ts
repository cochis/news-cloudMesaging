import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { mergeMapTo } from 'rxjs/operators';
import { getMessaging, getToken } from "firebase/messaging";

@Injectable({
  providedIn: 'root'
})

export class FcmService {
  // messagingFirebase: firebase.messaging.Messaging;
  constructor(private afMessaging: AngularFireMessaging) { }

  requestPermission() {
    return this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(
        (token) => { console.log('Permission granted! Save to the server!', token); },
        (error) => { console.error(error); },
      );
  }

}
