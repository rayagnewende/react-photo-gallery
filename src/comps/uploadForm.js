import react, {useState} from "react"; 
import ProgressBar from "./ProgressBar"
const UploadForm = () => {
    const [file, setFile] = useState(null); 
    const [error, setError] = useState(null)
    const types = ["image/png", "image/jpeg"]; 

    const handleChange = (e) => {
        let selected = e.target.files[0]; 
        if(selected && types.includes(selected.type))
        {
            setFile(selected); 
            setError(""); 
        }else {
            setFile(null); 
            setError("please select (png or jpeg ) image file"); 
            
        } 

    }
    return (
        <form >
            <input type="file"  onChange={handleChange} /> 
            {error && <div className="output" >{error}</div>}
        </form>
    )
}


export default UploadForm ; 