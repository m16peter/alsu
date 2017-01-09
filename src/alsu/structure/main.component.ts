import { Component } from '@angular/core';

@Component({
    selector: 'main',
    templateUrl: './main.html',
    styleUrls: ['./main.css']
})

export class MainComponent {


    public main: any;

    constructor() {
        this.main = {

            // toolbar
            "config": {
                "activated": false,
                "run": "play_arrow"
            },

            // left-side
            "input": {
                "width": ["sm", "md", "lg"],
                "data": []
            },

            // right-side
            "output": {
                "width": ["sm", "md", "lg"],
                "data": []
            }

        };
    }

    /**
     * Compile Event
     */
    public compileEvent(): void {
        this.isActivatedConfig() ? this.deactivateConfig() : this.activateConfig();
        console.log('compileEvent()');
    }
    private isActivatedConfig(): boolean {
        return this.main.config.activated;
    }
    private deactivateConfig(): void {
        this.main.config.run = "play_arrow";
        this.main.config.activated = false;
    }
    private activateConfig(): void {
        this.main.config.run = "stop";
        this.main.config.activated = true;
    }

}