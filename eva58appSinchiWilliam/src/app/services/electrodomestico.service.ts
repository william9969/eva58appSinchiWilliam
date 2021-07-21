import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Electrodomestico } from '../domain/electrodomestico';

@Injectable({
  providedIn: 'root'
})
export class ElectrodomesticoService {

  constructor(public afs: AngularFirestore) { }

  save(electrodomestico: Electrodomestico){
    const refElectrodomestico = this.afs.collection("electrodomesticos");
    if(electrodomestico.uid==null){
      electrodomestico.uid=this.afs.createId();
      
    }
    refElectrodomestico.doc(electrodomestico.uid).set(Object.assign({},electrodomestico))
  }

  getElectrodomesticos():Observable<any>{
    return this.afs.collection("electrodomesticos").valueChanges();
  }
  
  searchElectodomestico(nombre):Observable<any>{
    console.log(nombre)
    //return this.afs.collection("electrodomesticos").doc(nombre).valueChanges();
    return this.afs.collection("electrodomesticos",
    ref => ref.where("nombre","==",nombre)).valueChanges();
  }
}
