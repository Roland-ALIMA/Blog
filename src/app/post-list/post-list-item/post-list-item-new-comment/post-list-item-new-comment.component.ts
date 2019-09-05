import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-post-list-item-new-comment',
  templateUrl: './post-list-item-new-comment.component.html',
  styleUrls: ['./post-list-item-new-comment.component.scss']
})
export class PostListItemNewCommentComponent implements OnInit {

  form: FormGroup;
  comment: string;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<PostListItemNewCommentComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    this.comment = data.comment;
  }

  ngOnInit() {
    this.form = this.fb.group({
      comment: [this.comment, []],
    });
  }

  save() {
    const comment = this.form.get('comment').value;
    console.log(comment);
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
