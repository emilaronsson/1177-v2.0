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
        return `<div style="text-align: center;">
                    <h1>${this.pageTitle}</h1>
                    <p class="page-content">
                    I den här affärsplanen presenteras ett förslag på ett projekt för att förbättra användarupplevelsen av 1177 appen.
                    Under de senaste pandemi-präglade åren är vi många som kommit i kontakt med vården i högre utsträckning än vad vi kanske är vana vid.
                    Detta har lett till en ökad belastning på en redan överbelastad sjukvård.
                    För att minska trycket på vården hänvisas man många gånger till att använda 1177:s app för att hantera sina ärenden.
                    Problemet är att appen är slarvigt designad, svåranvänd och fylld med överflödig information.
                    Jag vill därför framföra det här projektet till 1177:s ledning som ett förslag på hur appen kan göras om för att bättre fylla funktionen som ett smidigt verktyg för att kommunicera med vården
                    </p>
                </div>`
    }
}