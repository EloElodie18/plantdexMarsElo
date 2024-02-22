import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
})
export class IconComponent {
  /**
   * TODO @Input to set icon name
   * Result :
   * <app-icon [iconName]="'sun-fill'"></app-icon>
   * I want to display an icon with a filled sun
   *
   * Steps :
   * 1 - Install bootstrap icon library (5 min)
   *  npm i bootstrap-icons
   *
   * 2 - Include icon's CSS file into your Angular project (5 min)
   *  update of angular.json
   *  with node_modules/bootstrap-icons/font/bootstrap-icons.min.css
   *
   * 3 - Test if it working with this example : (5 min)
   *   <i class="bi-alarm"></i>
   *
   * 4 - Adapt to use the @Input value and replace the class
   */

  @Input() iconName:
    | 'heart'
    | 'heart-fill'
    | 'sun'
    | 'sun-fill'
    | 'droplet'
    | 'droplet-fill'
    | 'postcard-heart' = 'heart';

  @Input() iconColor = 'yellow';
  @Input() iconSize: number = 1.5;
}
