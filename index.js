/* 1) Crea un programa que verifique usuario y contraseña:
- Usuario: juanGarcia23
-Contraseña: cJZoht3!
2) Crea un programa que indique si el estudiante aprobó o no la materia:
-notaExamen>8
-notaTP>=6
-Asistencia==True
3)Crear un programa que indique al usuario/a que basura puede sacar:
-Lunes, Miercoles, Viernes:Humedos
-Martes,Jueves,Domingo:Secos
-Sabado:No pasa
*/

//1) 
let Contraseña = prompt("¿Cual es tu contraseña?")
let Usuario = prompt("¿Cual es tu usuario?")

if ((Contraseña == "juanGarcia23") && (Usuario == "cJZoht3!")) {
   alert("Bienvenido" + Usuario) 
} else {
    alert("Contraseña y Usuario incorrecto")
}

//2) 
let NotaExamen = Number(prompt)("¿Que nota sacaste?")
let NotaTP = Number(prompt)("¿Que nota sacaste en los TP?")
let Asistencia = prompt("¿Tienes asistencia completa?")
if ((NotaExamen > 8) && (NotaTP >= 6) || (Asistencia == True)) {
    alert("Aprobaste la materia")
} else {
    alert("Desaprobaste la materia")
}

//3)
let LunesMiercolesViernes = "Basura Humeda"
let MartesJuevesDomingo = "Basura Seca"
let Sabado = "No se saca basura"
if ((LunesMiercolesViernes == "Basura Humeda") && (MartesJuevesDomingo == "Basura Seca")  && (Sabado == "No se saca basura")){
    alert("Los Lunes, Miercoles y Viernes sacar basura humeda, los Martes, Jueves y Domingos sacar basura seca y los Sabados no se saca")
} else {
    
}