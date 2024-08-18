import { AbstractView } from "../../src/common/view.js";
import onChange from "on-change";

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
        main.innerHTML = "Test";
        this.app.innerHTML = "";
        this.app.append(main);
        this.appState.favorites.push("fs")
    }
}