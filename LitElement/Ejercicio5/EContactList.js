import { html, LitElement } from 'lit';
import './EContact.js';
export class EContactList extends LitElement {

  static get properties () { 
    return {
      contactos:{ type: Array}
    };
  }

  constructor() {
    super();
    this.contactos = [
      {
      nombre: 'Gustavo Morales',
      email: 'gustavo@gelinek.xyz'
      },
      {
        nombre: 'Gelinek Morales',
        email: 'gelinek@gelinekmorales.com'
      },
      {
        nombre: 'Guadalupe Alvarez',
        email:'guadalupe@gelinek.xyz'
      }
    ];
  }


  render() {
    
    return html`

    <div>
      ${this.contactos.map(contact => html`
      <e-contact nombre = "${contact.nombre}"
        email="${contact.email}"></e-contact>`)}
    </div>
    `;

  
  }

}
window.customElements.define('e-contact-list', EContactList);