import '../../node_modules/jquery/dist/jquery.js';
import { ApplicationBase } from './framework/application-base.js';
import {BusinessPlanPage} from './business-plan-page.js';
import {PrototypeIdeaPage} from './prototype-idea-page.js';
import {AboutPage} from './about-page.js';

export class App extends ApplicationBase {

    constructor() {
        super('Base of Operations');

        this.addRoute('Affärsplan', new BusinessPlanPage(), true);
        this.addRoute('Prototyp', new PrototypeIdeaPage());
        this.addRoute('About', new AboutPage());
    }

}

export let application = new App();
application.show($('body'))



// let tb = new TitleBar('1177 v 2.0');
// tb.addLink('Affärsplan', '');
// tb.addLink('Prototyp', '');
// tb.addLink('About', '');

// tb.appendToElement($('header'))

//target_blank för app.html