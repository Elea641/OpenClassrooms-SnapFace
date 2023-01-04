import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  userEmail = 'me@my-house.com';

  constructor(private router: Router) {}

  onContinue(): void {
    this.router.navigateByUrl('facesnaps');
  }

  onSubmitForm(form: NgForm) {
    console.log(form.value);
  }
}
