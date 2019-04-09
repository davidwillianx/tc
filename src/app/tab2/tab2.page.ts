import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  constructor(
    private dragulaService: DragulaService
  ) {
    this.dragulaService.createGroup('Friuts', {removeOnSpill: true});
    this.dragulaService.createGroup('Objects', {removeOnSpill: true});
    this.dragulaService.createGroup('People', {removeOnSpill: true});
  }

}
