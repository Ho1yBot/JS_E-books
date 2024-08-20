import { AbstractView } from "../../src/common/view.js";
import onChange from "on-change";
import { Header } from "../../src/components/header/header.js";
import { Search } from "../../src/components/search/search.js";

export class MainView extends AbstractView {
    state = {
        list: [],
        laoding: false,
        searchQuery: undefined,
        offset: 0
    }
    constructor(appState) {
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this))
        this.setTitle("Поиск книг")
    }

    appStateHook(path) {
        console.log(path);
    }

    render() {
        const main = document.createElement("div");
        main.append(new Search(this.state).render())
        this.app.innerHTML = "";
        this.app.append(main);
        this.renderHeader();
    }

    renderHeader(){
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    }
}