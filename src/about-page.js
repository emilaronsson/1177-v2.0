import { Page } from "./framework/page.js";
import { application } from "./app.js";

export class AboutPage extends Page {

    constructor() {
        super('About');
    }

    createElement() {
        super.createElement();
    }

    getElementString() {
        return '<div style="text-align: center;">Om mig</div>'
    }
}