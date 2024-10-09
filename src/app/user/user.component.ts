import { Component, OnInit } from '@angular/core';
import { MatButtonModule, MatFabButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatFabButton,
    MatDialogModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {




  constructor() { }

  ngOnInit(): void {

  }

  openDialog() {
    console.log("Open Dialog");

  }
}
