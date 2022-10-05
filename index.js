// Operadores avanzados


const usuarios1 = [
    {
     nombre : 'Oscar' ,  
     apellido : 'Ramirez',
     edad : 31
    },

    {
     nombre : 'Santiago',
     apellido : 'Martinez',
     edad : 35
    },

    {
    nombre : 'Victor',
    apellido : 'Perez',
    edad : 15
    }
]

const usuarios2 = [
    {
     nombre : 'Raul' ,  
     apellido : 'Pitana',
     edad : 12
    },

    {
     nombre : 'Matias',
     apellido : 'Ojeda',
     edad : 79
    },

    {
    nombre : 'Jesus',
    apellido : 'Delaferrere',
    edad : 4
    }
]



const usuarios = []

usuarios.push (...usuarios1, ...usuarios2)





const comprarAlcohol = ({edad, nombre, apellido}) => {

return edad  > 18 ?  `<b> ${nombre}  ${apellido} TIENE PERMITIDO COMPRAR ALCOHOL, POR QUE ES MAYOT DE EDAD </b> <br> `  :  ` <b> ${nombre}  ${apellido} NO TIENE PERMITIDO COMPRAR ALCOHOL, POR QUE ES MENOR DE EDAD </b> <br>  `

}


usuarios.forEach(personas => {
    document.write(comprarAlcohol(personas))
});





