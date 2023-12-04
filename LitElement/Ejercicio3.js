import { html,  css, LitElement} from 'lit';

export class gelinek extends LitElement{
  static get styles(){

    return css`
    h1{
       font-size:2em;
    }
    body{
      padding:10px;
      display: list-item
    }
    `;
  }
  static get properties(){
    return {
      nombre: {type:String},
      email: {type: String},
      verMas:{type: Boolean}
    };
  }

  constructor(){
    super();
    this.verMas = false;
    this.nombre = "Gustavo",
    this.email ="gustavo@gelinek.xyz";
  }
    
  render(){
    return html `
      <h1>${this.nombre}</h1>
      <p><a href="#" @click= "${this.toggle}" >ver más</a>
    
      ${this.verMas ?
      html`
      <br>Email: ${this.email}`:''
      }
    `;
  }
  toggle(e){
    e.preventDefault();
    this.verMas = !this.verMas;
  }
}

customElements.define('simple-component', gelinek);
