
import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NetlifyFormsService } from '../netlify-forms/netlify-forms.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private netlifyForms: NetlifyFormsService
  ) { }


  feedbackForm = this.fb.group({
    firstName: ['', [Validators.required]], 
    lastName: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    //type: ['', Validators.required],
      description: ['', [Validators.required]]
    //rating: [0, Validators.min(1)]
  });

  errorMsg = '';


  onSubmit() {

    if (this.feedbackForm.value){
    this.netlifyForms.submitFeedback(this.feedbackForm.value).subscribe(
      () => {
        this.feedbackForm.reset();
        this.router.navigateByUrl('/success');
      },
      err => {
        this.errorMsg = err;
      }
    );
   }
  }


  closeError() {
    this.errorMsg = '';
  }


  ngOnInit(): void {
  }

}
