import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './usuario-dropdown.component.html',
  styleUrls: ['./usuario-dropdown.component.css']
})
export class DropdownComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
