import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController} from 'ionic-angular';
import { GeocacheServiceProvider } from '../../providers/geocache-service/geocache-service';

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  public caches: any[]
  public modalCadastro : any 
  public modalControler: CadastroModal
  public latlong: any[]

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private servico: GeocacheServiceProvider, private modal: ModalController) {
      this.latlong = ['','']
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
    this.servico.getGPSLocation();
    this.caches =  this.servico.getAllGeochaches();
  }

  abrirModalCadastro(){
    this.latlong =  this.servico.getAllData();
    console.log(this.latlong);
    this.modalCadastro = this.modal.create(CadastroModal,{ data: this.latlong, servico: this.servico});
    this.modalCadastro.present();
  }
  fecharModal(){
    this.modalControler.fecharModal()
  }

  getCurrentLocation(){
      this.latlong =  this.servico.getAllData();
      console.log(this.latlong)
  }

}

@Component
({
  templateUrl: 'modalCadastro.html',
})
export class CadastroModal {
  public latlog : any[];
  public descricao: any;
  private servico: GeocacheServiceProvider

  constructor(public navParams: NavParams, public controlerView:ViewController) {
    this.latlog = navParams.get("data");
    this.servico = navParams.get("servico");
    if(this.latlog == null){
      this.latlog = ["GPS ERROR","GPS ERROR"];
    }
    this.descricao = "Insira uma descricao.";
  }
  
  fecharModal(){
    this.controlerView.dismiss()
  }
  registarGeochache(form){
    console.log(form)
    console.log(form.value)
    console.log(form.status)
    if(form.status == "VALID"){
      this.servico.addItem(form.value.latitude,form.value.longitude,form.value.description)
    }
  }
}