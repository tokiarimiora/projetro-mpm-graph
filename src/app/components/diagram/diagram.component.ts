import { Component, Input, OnInit } from '@angular/core';
import * as go from 'gojs';

const $ = go.GraphObject.make;

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss'],
})
export class DiagramComponent implements OnInit {
  @Input() model: go.Model = new go.Model();
  public diagram: go.Diagram = new go.Diagram();

  constructor() {}

  ngOnInit(): void {
    this.diagram = $(go.Diagram, 'myDiagram');
    this.diagram.model = this.model;
  }
}
