import { useHistory } from "react-router-dom";
import plateSvg from "../assets/plate.svg"


const Home = () => {
    const history = useHistory()
    const handleSearch = () =>{
        history.push("/search")
    }
    return ( 
        <main>
            <figure className="figure">
                <img src={plateSvg} alt="plate icon" />
                <h2 className="block">1</h2>
            </figure>
            <div>
                <h1 className="title">Find recipes for the ingredients you have on hand</h1>
                <button onClick={handleSearch}>Search Now</button>
            </div>  

            <img src="./assets/plate.svg" alt="" srcset="" />  
        </main>
     );
}
 

export default Home;