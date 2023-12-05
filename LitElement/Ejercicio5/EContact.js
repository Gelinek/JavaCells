import { html, css, LitElement } from 'lit';;


export class EContact extends LitElement {
  
  static get properties () { 
    return {
      nombre:{type:String}, 
      email:{type: String}
    };
  }

  /*constructor() {
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
*/

  render() {
    return html`
    <style>
        div{
            padding: 10px;
            border-radius: 5px;
            display: list-item;
            color: blue;
            font-size: 20px;
        }
    </style>
    <div>
      ${this.nombre}, ${this.email}
    </div>
    `;
  }
  
  

}

customElements.define('e-contact', EContact);