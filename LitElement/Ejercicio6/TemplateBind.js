import { html, css, LitElement } from 'lit';

export class TemplateBind extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--template-bind-text-color, #000);
    }
  `;

  static get properties() {
    return{
    prop1: {type: String},
    prop2: {type: String},
    prop3: {type: Boolean},
    prop4: {tyoe: String}
    };
  }

  constructor() {
    super();
    this.prop1 = 'text binging';
    this.prop2 = 'my div';
    this.prop3 = true;
    this.prop4 = 'pie';

  }

  render() {
    return html`
      <div> ${this.prop1}</div>

      <div id="${this.prop2}">attribute binding</div>

      <div> Boolean attribute binding <input type ="text" ?disabled="${this.prop3}"/></div>

      <div> property binding <input type="text" .value="${this.prop4}"/></div>
      <div> event handler binding <button @click ="${this.clickHandler}">click here</button> </div>
      `;

  }

  clickHandler(e){
    console.log(e.target);
  }
}
