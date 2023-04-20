import { Directive, ElementRef, Host, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCustomTooltip]'
})
export class CustomTooltipDirective{

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log(this.el.nativeElement.getBoundingClientRect())

   }

  @HostListener('ngAfterViewInit') ngAfterViewInit(){
    this.renderer.setStyle(this.el.nativeElement.querySelector('.mon-tooltip'), 'display', 'none');
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.el.nativeElement.querySelector('.mon-tooltip'), 'display', 'inline');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.el.nativeElement.querySelector('.mon-tooltip'), 'display', 'none');
  }

}
// import {
//   Directive,
//   ElementRef,
//   HostListener,
//   Input,
//   Renderer2,
//   ContentChild,
//   TemplateRef,
//   ViewContainerRef,
// } from '@angular/core';

// @Directive({
//   selector: '[customToolTip]',
// })
// export class CustomTooltipDirective {
//   @ContentChild(TemplateRef) content!: TemplateRef<any>;
//   @Input() customToolTipPosition: 'top' | 'bottom' | 'left' | 'right' =
//     'bottom';

//   private tooltipElement: HTMLElement | null = null;

//   constructor(
//     private element: ElementRef,
//     private renderer: Renderer2,
//     private viewContainerRef: ViewContainerRef
//   ) {}

//   @HostListener('mouseenter') onMouseEnter() {
//     if (!this.tooltipElement) {
//       this.show();
//     }
//   }

//   @HostListener('mouseleave') onMouseLeave() {
//     if (this.tooltipElement) {
//       this.hide();
//     }
//   }

//   private show() {
//     const factory = this.renderer.createElement('div');
//     const view = this.viewContainerRef.createEmbeddedView(this.content);
//     this.renderer.appendChild(factory, view.rootNodes[0]);

//     this.renderer.addClass(factory, 'tooltip');
//     this.tooltipElement = factory;

//     const position = this.element.nativeElement.getBoundingClientRect();
//     if (this.tooltipElement) {
//       const tooltipPosition = this.tooltipElement.getBoundingClientRect();

//       let top, left;

//       switch (this.customToolTipPosition) {
//         case 'top':
//           top = position.top - tooltipPosition.height;
//           left = position.left;
//           break;
//         case 'bottom':
//           top = position.bottom;
//           left = position.left;
//           break;
//         case 'left':
//           top = position.top;
//           left = position.left - tooltipPosition.width;
//           break;
//         case 'right':
//           top = position.top;
//           left = position.right;
//           break;
//         default:
//           break;
//       }

//       this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
//       this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
//       this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
//       this.renderer.appendChild(document.body, this.tooltipElement);
//     }
//   }

//   private hide() {
//     this.viewContainerRef.clear();
//     this.renderer.removeChild(document.body, this.tooltipElement);
//     this.tooltipElement = null;
//   }
// }
