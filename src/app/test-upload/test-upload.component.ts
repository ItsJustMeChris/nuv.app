import { Component, OnInit, Input } from '@angular/core';
import { UploadService } from '../upload.service';
import { DownloadService } from '../download.service';

@Component({
  selector: 'app-test-upload',
  templateUrl: './test-upload.component.html',
  styleUrls: ['./test-upload.component.css']
})
export class TestUploadComponent implements OnInit {
  private upload: UploadService;
  private download: DownloadService;

  downloadUrl: any;

  constructor(upload: UploadService, download: DownloadService) {
    this.upload = upload;
    this.download = download;
  }

  ngOnInit(): void {
  }

  onFileChange(file) {
    this.upload.putFile(file);
  }

  downloadFile(): void {
    console.log(this.downloadUrl);
    console.log("Do Download");
    this.download.download(this.downloadUrl);
  }
}
