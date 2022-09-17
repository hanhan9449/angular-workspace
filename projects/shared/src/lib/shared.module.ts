import { NgModule } from '@angular/core';
import { TitleDirective } from './directive/title.directive';
import { DebugDirective } from './directive/debug.directive';
import { MediaQueryIfDirective } from './directive/media-query-if.directive';
import { IsEmptyPipe } from './pipe/is-empty.pipe';



@NgModule({
  declarations: [
    TitleDirective,
    DebugDirective,
    MediaQueryIfDirective,
    IsEmptyPipe
  ],
  imports: [
  ],
  exports: [
    TitleDirective,
    DebugDirective,
    MediaQueryIfDirective,
    IsEmptyPipe
  ]
})
export class SharedModule { }
