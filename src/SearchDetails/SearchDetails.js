import { useParams } from "react-router-dom";
import useFetch from "../UseFetch/UseFetch"

const SearchDetails = () => {
    const {id} = useParams()
    console.log(id)
    const {data: food, isPending, error} = useFetch(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const newFood =  food?.meals[0];
    return ( 
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {food && (
                <article>
                    <h2>{newFood.strMeal}</h2>
                    
                    <p>Written by - {newFood.strCategory}</p>
                    <div>{newFood.strIngredient1}</div>
                </article>
            )}
        </div>
     );
}
 
export default SearchDetails;