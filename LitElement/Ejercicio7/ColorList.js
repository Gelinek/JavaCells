import { LitElement, html } from "lit";
import './ListElement.js';
export class ColorList extends LitElement{
    static properties(){
        return {
            colors: {type: Array}
        };
    }
    constructor(){
        super();
        this.colors= ['Rojo', 'Verde', 'Azul', 'Amarillo'];
    }
    render(){
        return html`

        <list-element .items="${this.colors}"></list-element>
        `;
    }
}
