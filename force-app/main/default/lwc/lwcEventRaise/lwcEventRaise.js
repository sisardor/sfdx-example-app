import { LightningElement } from 'lwc';

export default class lwc_EventRise extends LightningElement {
  raiseEvent(event) {
    const v = this.template.querySelector('.txtInput').value;
    const textChangeEvent = new CustomEvent('txtChange', {
      detail: { v },
    });
    // fire event
    this.dispatchEvent(textChangeEvent)
  }
}
