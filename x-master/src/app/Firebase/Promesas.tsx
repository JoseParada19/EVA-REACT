import { persona } from "../Interfaces";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./Conexion";
export const registrarPersona=async(p:persona)=>{
    const docRef = await addDoc(collection(db, "personas"), p);
}
export const obtenerPersonas =async ()=>{
    var listado:persona[] =[];
    const querySnapshot = await getDocs(collection(db, "personas"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    var p:persona = {
        idPersona:doc.id,
        nombre:doc.data().nombre,
        apellido:doc.data().apellido,
        edad:doc.data().edad

    }
    listado.push(p)
    console.log(doc.id, " => ", doc.data());
    });
    return listado
}