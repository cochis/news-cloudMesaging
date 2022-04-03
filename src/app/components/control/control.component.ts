import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category, Configuration } from 'src/app/interfaces/interfaces';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})

export class ControlComponent implements OnInit {
  public categories: Category[] = [
    { name: 'business', description: 'Negocios' },
    { name: 'entertainment', description: 'Entretenimiento' },
    { name: 'health', description: 'Salud' },
    { name: 'science', description: 'Ciencia' },
    { name: 'technology', description: 'Tecnología' },
    { name: 'sports', description: 'Deportes' }
  ];
  public fonts: Category[] = [
    { name: "", description: "Inicial" },
    { name: "font-family: 'Acme', sans - serif;", description: "Acme" },
    { name: "font-family: 'Bebas Neue', cursive;", description: "Bebas" },
    { name: "font-family: 'Homemade Apple', cursive;", description: "Homemade" },
    { name: "font-family: 'Hurricane', cursive;", description: "Hurricane" },
    { name: "font-family: 'Indie Flower', cursive;", description: "Indie" },
    { name: "font-family: 'Oswald', sans - serif;", description: "Oswald" },
    { name: "font-family: 'Parisienne', cursive;", description: "Parisienne" },
    { name: "font-family: 'Passions Conflict', cursive;", description: "Passions" },
    { name: "font-family: 'Permanent Marker', cursive;", description: "Permanent" },
    { name: "font-family: 'Press Start 2P', cursive;", description: "Press" }

  ];
  form!: FormGroup;
  @Output()
  configuracion!: EventEmitter<Configuration>;
  constructor(private fb: FormBuilder,) {
    this.configuracion = new EventEmitter();
    this.crearFormulario();
    this.cargarDataAlFormulario();
    this.crearListeners();
  }

  ngOnInit(): void {
  }

  onSubmit() {

    console.log('this.form.value', this.form.value)
    this.configuracion.emit(this.form.value);
  }
  crearFormulario() {

    this.form = this.fb.group({
      categoria: ['', [Validators.required, Validators.minLength(5)]],
      frecuencia: ['', [Validators.required]],
      font: ['', [Validators.required]],
      minDate: ['', [Validators.required]],
      maxDate: ['', [Validators.required]],

    });

  }
  crearListeners() {
    this.form.valueChanges.subscribe(valor => {
      console.log(valor);
    });

    // this.forma.statusChanges.subscribe( status => console.log({ status }));
    // this.form.get('categoria').valueChanges.subscribe(console.log);
  }
  cargarDataAlFormulario() {

    // this.forma.setValue({
    this.form.reset({
      categoria: '',
      frecuencia: 90000,
      font: '',
      minDate: '',
      maxDate: '',
    });

  }

}
