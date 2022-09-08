import { Component, OnInit } from '@angular/core';
import {toolList} from "./tool-list";
@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  title = '工具'

  toolList = toolList

  constructor() { }

  ngOnInit(): void {
  }

}
