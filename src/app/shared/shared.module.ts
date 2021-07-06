import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as Components from '@shared/components';
/**
 *
 * You often have some components that are used everywhere, like a button component or price pipe.
 * It’s a best practise to create a SharedModule and declare these often used components, directives and pipes in there.
 * Then export these declarations and they will be accessible inside any module that imports the SharedModule .
 *
 */
@NgModule({
  declarations: [...Components.components],
  imports: [CommonModule, FormsModule],
  exports: [CommonModule, FormsModule, ...Components.components],
})
export class SharedModule {}
