import '../../node_modules/jquery/dist/jquery.js';
import { ApplicationBase } from './framework/application-base.js';
import {BusinessPlanPage} from './business-plan-page.js';
import {PrototypeIdeaPage} from './prototype-idea-page.js';
import {AboutPage} from './about-page.js';

export class App extends ApplicationBase {

    constructor() {
        super('1177 v2.0');

        this.addRoute('Affärsplan', new BusinessPlanPage(), true);
        this.addRoute('Prototyp', new PrototypeIdeaPage());
        this.addRoute('Kontakt', new AboutPage());
    }

}

export let application = new App();
application.show($('body'))

