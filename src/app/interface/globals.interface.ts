import { Injectable } from '@angular/core';

@Injectable()

export class Globals{
    email: string;
    nombre: string;
    uid: string;
    num_semestre: string;
    esSemestre: boolean = false;
}