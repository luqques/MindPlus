import { Component } from '@angular/core';

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css'],
})
export class ColaboradorComponent {

  openForm(evt: Event, formName: string): void {
    console.log(evt + formName);

    // Declare all variables
    let i: number;
    let tabcontent: HTMLCollectionOf<Element>;
    let tablinks: HTMLCollectionOf<Element>;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent") as HTMLCollectionOf<Element>;
    for (i = 0; i < tabcontent.length; i++) {
      (tabcontent[i] as HTMLElement).style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks") as HTMLCollectionOf<Element>;
    for (i = 0; i < tablinks.length; i++) {
      const tablink = tablinks[i] as HTMLElement;
      tablink.className = tablink.className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    const currentTab = document.getElementById(formName);
    if (currentTab) {
      currentTab.style.display = "block";
      if (evt && evt.currentTarget) {
        const currentTarget = evt.currentTarget as HTMLElement;
        currentTarget.className += " active";
      }
    }
  }
}