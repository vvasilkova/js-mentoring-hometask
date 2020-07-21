/**
 * Organize a page object structure of any app you want:
 * 1. Base page should be created
 * 2. At least one of the child pages should be inherited from the page
 * 3. Create a simple walk through scenarios using the described elements (how it was done on the sessions for Login functionality)
 */
class PageBlock{
    constructor(element) {
        this.element = element;
    }
    viewBlock() {
        return `I have viewed = ${this.element}`;
    }
}
class Page { 
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    viewBaseUrl() {
        return `My base url = ${this.baseUrl}`;
    }

    get banner(){
        return new PageBlock('banner');
    }

    get contacts(){
        return new PageBlock('+375 17 336-33-11');
    }

    open(){
        return `I have navigated to ${this.baseUrl}${this.path}`  
    }
}

let page = new Page('www.en.ticketpro.by');
console.log (page);
console.log(page.viewBaseUrl());

class SearchPage extends Page{
    constructor(baseUrl, path){
        super(baseUrl);
        this.path = path;
    }

    get eventField() {
        return`Event Field`;
    }

    get locationField() {
        return`Location Field`;
    }

    get searchButton() {
        return`Search Button`;
    }

    typeEvent(text) {
        return `I have typed ${text} into ${this.eventField}`;
    }

    typeLocation(text) {
        return `I have typed ${text} into ${this.locationField}`;
    }

    clickSearch(){
        return `I have clicked ${this.searchButton}`;
    }
}
let searchPage = new SearchPage ('www.en.ticketpro.by', '/advanced-search/');
console.log(searchPage);
console.log(searchPage.viewBaseUrl());
console.log(searchPage.open());
console.log(searchPage.banner.viewBlock());
console.log(searchPage.contacts.viewBlock());
console.log(searchPage.typeEvent('Ludovico Einaudi'));
console.log(searchPage.typeLocation('Minsk'));
console.log(searchPage.clickSearch());

