import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ui-footer',
  template: `
    <p>
      This is the footer library oooh waoo
    </p>
  `,
  styles: [
  ]
})
export class UiFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
