import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'kairoz-footer',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './footer.html',
})
export class Footer {}
