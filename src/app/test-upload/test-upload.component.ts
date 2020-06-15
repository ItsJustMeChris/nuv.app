import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-test-upload',
  templateUrl: './test-upload.component.html',
  styleUrls: ['./test-upload.component.css']
})
export class TestUploadComponent implements OnInit {
  private upload: UploadService;

  constructor(upload: UploadService) {
    this.upload = upload;
  }

  ngOnInit(): void {
  }

  onFileChange(file) {
    this.upload.putFile(file);
  }

}
