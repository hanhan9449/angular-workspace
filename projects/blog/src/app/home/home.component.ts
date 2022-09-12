import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = '首页（建设中）'
  text = `
      hi，你好！

      这是hanhan9449的网站，还在建设基础能力中。。。

      - 想看看我写的文章就跳转到**文章**看看
      - 想看看快捷的工具就跳转到**工具**看看
      - 想了解我就跳转到**我的**看看

      后面会写一些关于博客建设的文章，期待吧QAQ
  `

  constructor() { }

  ngOnInit(): void {
  }

}
