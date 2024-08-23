import { DivComponent } from "../../common/div-component";
import { Card } from "../card/card";
import "./card-list.css"

export class CardList extends DivComponent {
    constructor(appState, parentState) {
        super();
        this.appState = appState;
        this.parentState = parentState;
    }

    loadData() {
        const listString = localStorage.getItem(this.FAVORITES_LIST);
        const listArray = JSON.parse(listString);
        if (Array.isArray(listArray)) {
            this.appState.favorites = listArray
        }
        console.log(this.appState.favorites);
    }

    FAVORITES_LIST = "FAVORITES_LIST"


    saveData() {
        localStorage.setItem(this.FAVORITES_LIST, JSON.stringify(this.appState.favorites))
    }


    render() {
        if (this.parentState.loading) {
            this.el.innerHTML = "<div class='card_list__loader'>Loading...</div>"

            return this.el
        }
        console.log(this.appState.favorites);
        this.saveData()
        const cardGrid = document.createElement("div")
        cardGrid.classList.add("card_grid");
        this.el.append(cardGrid)
        for (const card of this.parentState.list) {
            cardGrid.append(new Card(this.appState, card).render())
        }
        return this.el
    }
}