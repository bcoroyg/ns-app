import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { requestPermissions, takePicture } from '@nativescript/camera'
import { ImageSource as imageSourceModule } from '@nativescript/core';

import * as SocialShare from '@nativescript/social-share';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  onTap(): void {
    requestPermissions().then(
      function success() {
        takePicture({
          width: 300,
          height: 300,
          keepAspectRatio: false,
          saveToGallery:true,
        }).
          then((imageAsset) => {
            imageSourceModule.fromAsset(imageAsset).
            then((imageSource)=>{
              SocialShare.shareImage(imageSource, "Asunto: compartido desde el curso!");
            });
            console.log("Tamaño: " + imageAsset.options.width + "x" + imageAsset.options.height);
            console.log("keepAspectRatio: " + imageAsset.options.keepAspectRatio);
            console.log("Foto guardada!");
          }).catch((err) => {
            console.log("Error -> " + err.message);
          });
      },
      function failure() {
        console.log("Permiso de camara no aceptado por el usuario");
      }
    );
  };
}
