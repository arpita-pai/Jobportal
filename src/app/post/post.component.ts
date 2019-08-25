import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postform: FormGroup;
  submitted = false;
  post: any;
  // getpost :any[] = [];
  // pageActual: number = 1;
  // radio : string = "true";

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private postservice: PostService
   
  ) { }

  ngOnInit() {
    this.postform = this.formBuilder.group({
      title: ['', [Validators.required, Validators.pattern("[a-zA-Z]+")]],
      applylink: ['', [Validators.required, Validators.pattern("[a-zA-Z]+")]],
      jd: ['', Validators.required],
      companyname: ['', Validators.required],
      experience: ['', Validators.required],
      salary: ['', Validators.required],
      type: ['', Validators.required],
      skills: ['', Validators.required],
      payroll: ['', Validators.required],
      description: ['', Validators.required],
      closing: ['', Validators.required]
    });
    this.getMyPost();
  }

  getMyPost() {
    // let c_id = this.session.c_id;
    // let c_u_id = this.session.c_u_id;
    this.postservice.getMyPost()
    .subscribe(res=>{
      console.log(res)
      // this.getpost = res;
    });
  }

  
  
  
}