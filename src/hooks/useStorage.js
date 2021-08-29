
import React, {useState, useEffect}   from "react"; 
import { projectStorage } from "../firebase/config"; 


const useStaorage = (file) =>  {
   const [progress, setProgress] = useState(null); 
   const [error, setError] = useState(null)
   const [url, setUrl] = useState(""); 

   useEffect( () => {
    const storageRef  = projectStorage.ref(file.name); 
    storageRef.put(file).on('state_changed',  (snap) => {
        const percentage = (snap.bytesTransferred   / snap.totalBytes) * 100 ; 
        setProgress(percentage); 
    }, (error) => {
        setError(error); 
    }, async () => {
        const url = await storageRef.getDownloadURL(); 
        setUrl(url); 
    } )

   },[file])
   
   return { url , progress, error } ; 
}


export default useStaorage ; 