import { Page } from "./framework/page.js";

export class PrototypeIdeaPage extends Page {

    constructor() {
        super('Prototyp');
    }

    createElement() {
        super.createElement();
    }

    getElementString() {
        return '<div style="text-align: center;">Min prototyp</div>'
    }
}