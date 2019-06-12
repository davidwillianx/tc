import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
})
export class LevelComponent implements OnInit {

  /**
   * Contol level presentation
   */
  public levels: Array<{
    label: string,
    description: string
  }> = [
      { label: '1', description: 'Level inicial' },
      { label: '2', description: 'Level inicial' },
      { label: '3', description: 'Level moderado' },
      { label: '4', description: 'Level dificil' },
    ];


  constructor() { }

  ngOnInit() { }

}
