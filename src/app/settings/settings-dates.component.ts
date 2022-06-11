import { Component } from "@angular/core"
import { ApplicationSettings} from '@nativescript/core'

@Component({
    selector: 'SettingsDates',
    template: ``
})
export class SettingsDatesComponent {
  operations(){
    /* BOOLEAN */
    ApplicationSettings.setBoolean("isLog", true);
    const isLog = ApplicationSettings.getBoolean("isLog", false);
    /* STRING */
    ApplicationSettings.setString("nameUser", "Pedro");
    const nameUser = ApplicationSettings.getString("nameUser");
    /* NUMBER */
    ApplicationSettings.setNumber('locationX', 54.321);
    const locationX = ApplicationSettings.getNumber("locationX");
    /* VERIFICACIÓN DE EXISTENCIAS DE CLAVE */
    const hasName = ApplicationSettings.hasKey("nameUser");
    /* BORRAR UN VALOR */
    ApplicationSettings.remove("nameUser");
    /* BORRAR TODOS LOS VALORES */
    ApplicationSettings.clear();
  };
}
