import { Page } from "./framework/page.js";
import { application } from "./app.js";

export class BusinessPlanPage extends Page {

    constructor() {
        super('Affärsplan');
    }

    createElement() {
        super.createElement();
    }

    getElementString() {
        return '<div style="text-align: center;">Affärsplan 1177 v 2.0</div>'
    }
}