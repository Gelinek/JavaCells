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
      titulo: {type: String},
      con:{type: Number},
    };
  }

  constructor(){
    super();
    this.title = "Legends never die";
    this.con = 0;
  }
    
  _increment(){
      this.con +=1;
  }
  render(){
    return html `
      <h1>${this.title} <br> #. ${this.con}!</h1>
      <button @click=${this._increment}>incrementar</button>
    `;
  }
}

customElements.define('simple-component', gelinek);