import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

const SearchResults = (props) => {
  const { food } = props;
  const history = useHistory();
  if (Object.keys(food) === null || Object.keys(food).length === 0) {
    history.push("search");
  }
  const [search, setSearch] = useState("");
  const [isPending, setIsPending] = useState(false);
  const { setFood } = props;

//   const goToSingle = (id) => {
//     history.push({ pathname: `singlemeal/${id}` });
//   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsPending(true);
    fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${search}`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response.meals);
        setFood(response.meals);
        setIsPending(false);
      })
      .catch((err) => console.error(err));
  };

  return (
    <header className="container">
      <div>
        <h2 className="title">What ingredients do you have?</h2>
      </div>
      <div className="outer-input-container">
        <div className="input-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type an ingredient"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </form>
          {isPending && (
            <div className="lds-facebook">
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>

      <div className="card-container">
        {isPending && <div className="card-container1"></div>}
        {!isPending && (
          <div className="card">
            {food?.map((foodItem) => (
              <Link to={`/singlemeal/${foodItem.idMeal}`}>
                <div
                  key={foodItem.idMeal}
                >
                  <div className="card-Inner">
                    <figure>
                      <img src={foodItem.strMealThumb} alt="" />
                    </figure>
                    <figcaption>{foodItem.strMeal}</figcaption>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default SearchResults;
