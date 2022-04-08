import { Page } from "./framework/page.js";
import { application } from "./app.js";

export class AboutPage extends Page {

    constructor() {
        super('Kontakt');
    }

    createElement() {
        super.createElement();
    }

    getElementString() {
        return `<div style="text-align: center;">
                    <h1>${this.pageTitle}</h1>
                    <div>
                    <p class="page-content">Mobil: 0730333895</p>
                    <p class="page-content">Email: Aronsson.emil@hotmail.se</p>
                    </div>
                </div>`
    }
}