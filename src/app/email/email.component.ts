import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { compose } from '@nativescript/email'
import { knownFolders } from "@nativescript/core";
import { device, Screen as screen } from '@nativescript/core/platform'
import { connectionType, getConnectionType, startMonitoring, stopMonitoring } from "@nativescript/core/connectivity";


@Component({
  selector: 'Email',
  templateUrl: './email.component.html',
})

export class EmailComponent implements OnInit {
  monitoreando: boolean = false; // una variable para saber si estás monitoreando o no.
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
    const appFolder = knownFolders.currentApp(); // esto te da un objeto de tipo Folder
    const appPath = appFolder.path; // esto te da el path a la carpeta src
    const logoPath = appPath + "/app/res/icon.png"; // aquí armas el path del archivo copiado
    //correo
    compose({
      subject: "Mail de Prueba", // asunto del mail
      body: "Hola <strong>mundo!</strong> :)", // cuerpo que será enviado
      to: ["mail@mail.com"], //lista de destinatarios principales
      cc: [], //lista de destinatarios en copia
      bcc: [], //lista de destinatarios en copia oculta
      attachments: [ //listado de archivos adjuntos
        {
          fileName: "arrow1.png", // este archivo adjunto está en formato base 64 representado por un string
          path:
            "base64://iVBORw0KGgoAAAANSUhEUgAAABYAAAAoCAYAAAD6xArmAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAHGlET1QAAAACAAAAAAAAABQAAAAoAAAAFAAAABQAAAB5EsHiAAAAAEVJREFUSA1iYKAimDhxYjwIU9FIBgaQgZMmTfoPwlOmTJGniuHIhlLNxaOGwiNqNEypkwlGk9RokoIUfaM5ijo5Clh9AAAAAP//ksWFvgAAAEFJREFUY5g4cWL8pEmT/oMwiM1ATTBqONbQHA2W0WDBGgJYBUdTy2iwYA0BrILDI7VMmTJFHqv3yBUEBQsIg/QDAJNpcv6v+k1ZAAAAAElFTkSuQmCC",
          mimeType: "image/png"
        },
        {
          fileName: "icon.png", // este archivo es el que lees directo del filesystem del mobile
          path: logoPath,
          mimeType: "image/png"
        }]
    }).then(() => console.log("Enviador de mail cerrado"), (err) => console.log("Error: " + err));
  };

  onDatosPlataforma(): void {
    console.log("modelo", device.model);
    console.log("tipo dispositivo", device.deviceType);
    console.log("Sistema operativo", device.os);
    console.log("versión sist operativo", device.osVersion);
    console.log("Versión sdk", device.sdkVersion);
    console.log("lenguaje", device.language);
    console.log("fabricante", device.manufacturer);
    console.log("código único de dispositivo", device.uuid);
    console.log("altura en pixels normalizados", screen.mainScreen.heightDIPs); /* DIP
    (Device Independent Pixel), también conocido como densidad de píxeles independientes.Un
    píxel virtual que aparece aproximadamente del mismo tamaño en una variedad de
    densidades de pantalla.*/
    console.log("altura pixels", screen.mainScreen.heightPixels);
    console.log("escala pantalla", screen.mainScreen.scale);
    console.log("ancho pixels normalizados", screen.mainScreen.widthDIPs);
    console.log("ancho pixels", screen.mainScreen.widthPixels);
  };

  onMonitoreoDatos(): void {
    const myConnectionType = getConnectionType();
    switch (myConnectionType) {
      case connectionType.none:
        console.log("Sin Conexion");
        break;
      case connectionType.wifi:
        console.log("WiFi");
        break;
      case connectionType.mobile:
        console.log("Mobile");
        break;
      case connectionType.ethernet:
        console.log("Ethernet"); // es decir, cableada
        break;
      case connectionType.bluetooth:
        console.log("Bluetooth");
        break;
      default:
        break;
    }
    this.monitoreando = !this.monitoreando;
    if (this.monitoreando) {
      startMonitoring((newConnectionType) => {
        switch (newConnectionType) {
          case connectionType.none:
            console.log("Cambió a sin conexión.");
            break;
          case connectionType.wifi:
            console.log("Cambió a WiFi.");
            break;
          case connectionType.mobile:
            console.log("Cambió a mobile.");
            break;
          case connectionType.ethernet:
            console.log("Cambió a ethernet.");
            break;
          case connectionType.bluetooth:
            console.log("Cambió a bluetooth.");
            break;
          default:
            break;
        }
      });
    } else {
      stopMonitoring();
    }
  }
}
