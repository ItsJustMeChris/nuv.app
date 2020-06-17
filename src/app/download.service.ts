import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

declare var flate: any;
declare var streamSaver: any;


@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  private httpClient: HttpClientModule;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  download(url: string) {
    const fileStream = streamSaver.createWriteStream('resignation.txt')
    const writer = fileStream.getWriter()

    const wasmFlateStream = new streamSaver.WritableStream({
      write(chunk) {
        const compressed = flate.deflate_decode_raw(chunk);
        writer.write(compressed);
      },
      close() {
        writer.close();
      },
      abort() {
      }
    });

    fetch(url).then(res => {
      const readableStream = res.body

      // // more optimized
      // if (window.WritableStream && readableStream.pipeTo) {
      //   return readableStream.pipeTo(fileStream)
      //     .then(() => console.log('done writing'))
      // }

      const wasmStream = wasmFlateStream.getWriter();

      const reader = res.body.getReader()
      const pump = () => reader.read()
        .then(res => res.done
          ? wasmStream.close()
          : wasmStream.write(res.value).then(pump));
      pump();
    });
  }
}
