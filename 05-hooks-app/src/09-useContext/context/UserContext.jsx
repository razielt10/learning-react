import { createContext } from "react";


// le podemos colocar el estado inicial como null, undefined, objeto vacio
// 1 saber como luce la info que vamos a colocar alli
// 2 el hook de react busque el contexto
// 3 definir el proveedor
export const UserContext = createContext();
