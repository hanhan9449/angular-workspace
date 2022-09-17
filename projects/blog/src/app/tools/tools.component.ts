import {Component, Inject, InjectionToken, OnInit} from '@angular/core';
import {toolList} from "./tool-list";
import {TOOL_ITEM_LIST} from "@shared";


@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  title = '工具列表'

  toolList = toolList

  constructor(
    @Inject(TOOL_ITEM_LIST) private toolItemList: any[]
  ) {
  }

  ngOnInit(): void {
  }

}
