import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>EPIBREWHAUS</h1>
    <keg-list
        [childKegList]="masterKegList"
        (clickSender)="showDetails($event)"
        (sellClickSender)="sellPint($event)"
      ></keg-list>
    <edit-keg
      [childSelectedKeg]="selectedKeg"
      (doneClickedSender)="finishedEditing()"
    ></edit-keg>
    <new-keg
      (newKegSender)="addKeg($event)"
    ></new-keg>
  </div>
  `
})

export class AppComponent {
  public masterKegList: Keg[] = [
      new Keg("Dean's DIPA", "Epibrewus", 749, 9),
      new Keg("Faux PBR", "Blake's Brews", 400, 5),
      new Keg("Lorem Ipsum Lager", "Epibrewus", 620, 7.5),
      new Keg("Pliny the Coder", "Epibrewus", 868, 8)
  ];
  selectedKeg: Keg = null;
  showDetails(clickedKeg: Keg) {
    this.selectedKeg = clickedKeg;
  }
  finishedEditing() {
    this.selectedKeg.setPriceColor();
    this.selectedKeg.setCostPerPint();
    this.selectedKeg = null;
  }
  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }

  sellPint(pintSold: Keg){
    pintSold.pintsLeft--;
  }
}
