import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

interface UploadInfo {
  UploadId: string;
}

declare var flate: any;

interface UploadUrl {
  url: string;
}

@Injectable({
  providedIn: 'root'
})

export class UploadService {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async putFile(file: File): Promise<string> {
    const fileToUpload = file[0];
    const FILE_CHUNK_SIZE = 10000000; // 10MB
    const fileSize = fileToUpload.size;
    const NUM_CHUNKS = Math.floor(fileSize / FILE_CHUNK_SIZE) + 1;

    let completeUploadResp;

    const uploadInfo = await this.httpClient.get<UploadInfo>(`http://127.0.0.1:8008/v1/file/start-upload/${fileToUpload.name}`).toPromise();
    for (let index = 1; index < NUM_CHUNKS + 1; index++) {
      const start = (index - 1) * FILE_CHUNK_SIZE
      const end = (index) * FILE_CHUNK_SIZE
      const blob = (index < NUM_CHUNKS) ? fileToUpload.slice(start, end) : fileToUpload.slice(start)

      // (1) Generate presigned URL for each part
      const uploadURL = await this.httpClient.get<UploadUrl>(`http://127.0.0.1:8008/v1/file/upload-url`, { params: { uploadId: uploadInfo.UploadId, partNumber: index.toString(), fileName: fileToUpload.name } }).toPromise();
      console.log(uploadURL);
      const buffer = await blob.arrayBuffer();

      const arr = new Uint8Array(buffer)
      const compressed = flate.deflate_encode_raw(arr);
      const compressedBlob = new Blob([compressed], {});
      const putFile = await this.httpClient.put(uploadURL.url, compressedBlob, { headers: { 'Content-Type': fileToUpload.type }, observe: 'response' }).toPromise();
      const ETag = putFile.headers.get('ETag');

      completeUploadResp = await this.httpClient.post(`http://127.0.0.1:8008/v1/file/end-upload`, {
        params: {
          fileName: fileToUpload.name,
          uploadId: uploadInfo.UploadId,
          parts: [
            {
              ETag, PartNumber: 1,
            }
          ]
        }
      }).toPromise();
      console.log(completeUploadResp);



      // console.log('   Presigned URL ' + index + ': ' + presignedUrl + ' filetype ' + fileToUpload.type)

      // // (2) Puts each file part into the storage server
      // let uploadResp = axios.put(
      //   presignedUrl,
      //   blob,
      //   { headers: { 'Content-Type': this.state.selectedFile.type } }
      // )
      // // console.log('   Upload no ' + index + '; Etag: ' + uploadResp.headers.etag)
      // promisesArray.push(uploadResp)
    }
    return completeUploadResp.Location;
  }
}
