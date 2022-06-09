import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Application, Dialogs as dialogs } from "@nativescript/core";
import { ToastDuration, Toasty } from '@triniwiz/nativescript-toasty'

@Component({
  selector: "Settings",
  templateUrl: "./settings.component.html",
})
export class SettingsComponent implements OnInit {
  constructor() {
    // Use the component constructor to inject providers.
  }

  doLater(fn) {
    setTimeout(fn, 1000);
  }

  ngOnInit(): void {
    // Init your component properties here.
/*     this.doLater(() =>
      dialogs
        .action("Mensaje", "Cancelar!", ["Opcion1", "Opcion2"])
        .then((result) => {
          console.log("Resultado:" + result);
          if (result === "Opcion1") {
            this.doLater(() =>
              dialogs
                .alert({
                  title: "Titulo 1",
                  message: "Msje 1",
                  okButtonText: "Btn 1",
                })
                .then(() => console.log("Cerrado1!"))
            );
          } else if (result === "Opcion2") {
            this.doLater(() =>
              dialogs
                .alert({
                  title: "Titulo 2",
                  message: "Msje 2",
                  okButtonText: "Btn 2",
                })
                .then(() => console.log("Cerrado2!"))
            );
          }
        })
    ); */
    const toastOptions = new Toasty({text: "Hello World"})
    .setToastDuration(ToastDuration.SHORT);
    this.doLater(() => toastOptions.show());
  };

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }
}
