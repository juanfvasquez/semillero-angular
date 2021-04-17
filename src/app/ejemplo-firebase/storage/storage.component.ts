import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize, } from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {

  estado = '';
  url: Observable<any> = of("");

  constructor(
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
  }

  subir(evt: any) {
    const archivo = evt.target.files[0];
    console.log(URL.createObjectURL(archivo));
    const partes = archivo.name.split('.');
    const extension = partes[partes.length - 1];
    console.log(archivo);
    const nombre = `${Date.now()}.${extension}`;
    const path = `uploads/${nombre}`;

    const ref = this.storage.ref(path);
    const tarea = this.storage.upload(path, archivo);
    tarea.snapshotChanges().pipe(
      finalize(() => {
        console.log('Finalizó...');
        this.url = ref.getDownloadURL();
      })
    ).subscribe();
  }
}
