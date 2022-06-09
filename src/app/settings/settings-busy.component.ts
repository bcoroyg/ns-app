import { Component } from "@angular/core"
import { ActivityIndicator } from '@nativescript/core'

@Component({
    selector: 'SettingsBusy',
    template: `
        <Button
            text="Tocar!"
            (tap)="(activityIndicator.busy =!activityIndicator.busy)"
            class="btn btn-primary btn-active" >
        </Button>
        <ActivityIndicator
            #activityIndicator busy="true"
            (busyChange)="cambio($event)"
             width="100"
             height="100"
             class="activity-indicator">
        </ActivityIndicator>
    `
})
export class SettingsBusyComponent {
    cambio(e) {
        let indicator = <ActivityIndicator>e.object;
        console.log("indicator.busy: " + indicator.busy);
    }
}
