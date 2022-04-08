import { Page } from "./framework/page.js";

export class PrototypeIdeaPage extends Page {

    constructor() {
        super('Prototyp');
    }

    createElement() {
        super.createElement();
    }

    getElementString() {
        return `<div style="text-align: center;">
                   <h1>${this.pageTitle}</h1>
                   <div>
                   <p class="page-content">I min prototyp ska jag skapa en användarvänlig mina sidor för 1177. På mina sidor ska man kunna boka tider,
                   komma åt sina meddelanden och remisser och ha tillgång till information om eventuella recept, såsom återstående
                   uttag och möjlighet att förnya recept.</p>
                   </div>
                </div>`
    }
}