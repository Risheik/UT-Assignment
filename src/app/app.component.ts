import { Component, Input, HostListener, Inject } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, NgForm, Validators, ReactiveFormsModule} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true,
})
export class AppComponent {
  title = 'ABC Project';
  startersList=[{dish:"QUINDA CROQUETTAS",details:"Quinoa and cheddar croquettas with aji rocotto & pineapple salsa(v)",price:"$4.95"},{dish:"CHIFA CHICHARRONES",details:"Slow cooked, crispy pork belly with sweets soy sauce",price:"$4.95"},{dish:"CALAMRES",details:"Crispy baby squid with picked jalpeno miso salsa",price:"$4.95"}]
  mainCourseList=[{dish:"EL CLASSICO",details:"Sea basss ceviche with aji limo tiger' milk, sweet potato puree, choclo, corn, red onion , corinander & plantian (gf)",price:"$8.95"},{dish:"TIRADITO CALLAO",details:"Cobia tiradito with coriander tigers milk, black tobika,creme fraiche & sweet potato crunchies",price:"$8.95"}]
  sidesList=[{dish:"SUPER POLLO",details:"Marinated corn fed chicken pieces with rocotto salsa",price:"$4.95"},{dish:"PATATAS FRITAS  ",details:"Sweet porato fries with aji rocotto mayonnaise (V)",price:"$3.95"}]
  dessertList=[{dish:"ICECREAM",details:"Lorem ipsum dolor sit amet salerma petrum sea",price:"$3.95"},{dish:"TIRAMISU",details:"Lorem ipsum dolor sit amet salerma petrum sea",price:"$3.95"},{dish:"CHOCOLATE BROWNIE",details:"Lorem ipsum dolor sit amet salerma petrum sea",price:"$3.95"}];
  sections: NodeListOf<HTMLElement>;
  currentSelectedSection="home";
  @HostListener('window:scroll', ['$event'])
  onscroll() {
    var current: any = '';
    this.sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 60) {
        current = section.getAttribute('id');
        this.currentSelectedSection=current;
      }
    });
  }
constructor(private formbuilder:FormBuilder){}
ngOnInit(){
  this.sections = document.querySelectorAll('section');
}

 
scroll(id) {
  console.log(`scrolling to ${id}`);
  let el = document.getElementById(id);
  el.scrollIntoView();
}

}
