import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { CartPage } from '../cart/cart';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CartPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
