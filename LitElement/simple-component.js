import { html,  css, LitElement} from 'lit';

export class gelinek extends LitElement{
  static get styles(){

    return css`
    :host {
      display:block;
      padding:25px;
      color: blue;
    }
    `;
  }
  static get properties(){
    return {
      title: {type: String},
      con:{type: Number},

      titulo:{type: String},
      arreglo:{type: Array},
      lamp:{type: Boolean}
    };
  }

  constructor(){
    super();
    this.title = "Legends never die";
    this.con = 0;

    this.titulo = "Lista- Array";
    this.arreglo = ["Gelinek", "have", "been", "here", "!"];
    this.lamp = true;
  }
    
  _increment(){
      this.con +=1;
  }
  render(){
    return html `
      <h1>${this.title} <br> #. ${this.con}!</h1>
      <button @click=${this._increment}>incrementar</button>

      
      <h2>${this.titulo}</h2>
      ${this.arreglo.map(i => html`<li>${i}</li>`)}
      ${this.lamp?
      html`<p> funcionaaaa!!!</p>`:
      html`<p>no funciona :(</p>`
      }
    `;
  }
}

customElements.define('simple-component', gelinek);