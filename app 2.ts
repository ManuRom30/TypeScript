
// Objetos

type automovil = {
  carroceria: string,
  modelo: string,
  antibalas: boolean,
  pasajeros: number,
  disparar?():void // El metodo disparar es opcional
}
const batimovil: automovil = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee: automovil = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados
type villano = {
  nombre: string,
  edad: number | undefined,
  mutante: boolean
}
const villanos: villano[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type charles_type = {
  poder: string,
  estatura: number
}
const charles: charles_type = {
  poder:"psiquico",
  estatura: 1.78
};

type apoca_type = {
  lider: boolean,
  miembros: string[]
}

const apocalipsis: apoca_type = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: charles_type | apoca_type;

mystique = charles;
mystique = apocalipsis;
