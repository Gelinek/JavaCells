import { html, css, LitElement } from 'lit';

export class EContact extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--e-contact-text-color, #000);
    }
  `;

  static get properties () { 
    return {
      nombre:{
        type: String
      },
      email:{
        type:String
      },
      verMas:{
        type: Boolean  
      }
    };
    
  }

  constructor() {
    super();
    this.verMas = false;
  }


  render() {
    return html`
      <h1>${this.nombre} </h1>
      <p> <a href="#" @click="${this.toggle}">Ver más</a></p>

      ${this.verMas?
      html`Email:${this.email}`: ''
      }
    `;

  
  }

toggle(e){
  e.preventDefault();
    this.verMas = !this.verMas;
  
}
}
