import { Component } from '@angular/core';

import { IndexPage } from '../index/index';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = IndexPage;
  tab2 = AboutPage;

  constructor() {

  }
}
