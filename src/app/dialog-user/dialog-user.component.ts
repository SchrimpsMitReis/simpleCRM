import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-user',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './dialog-user.component.html',
  styleUrl: './dialog-user.component.scss'
})
export class DialogUserComponent {

}
