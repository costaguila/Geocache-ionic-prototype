import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndexPage, CadastroModal } from './index';


@NgModule({
  declarations: [
    IndexPage,CadastroModal
  ],
  imports: [
    IonicPageModule.forChild(IndexPage),
  ],
})
export class IndexPageModule {}
