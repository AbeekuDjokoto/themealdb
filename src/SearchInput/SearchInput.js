import { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchInput = (props) => {
  const [search, setSearch] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const { setFood } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!search){
      console.log("do nothing")
    }

    setIsPending(true);
    fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${search}`, {mode: 'cors'})
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        console.log(response.meals);
        setFood(response.meals);
        setIsPending(false);
        history.push("/searchresult");
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
          {!isPending && <p></p>}
          {isPending && (
            <div className="lds-facebook">
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
      </div>
      <div className="card-container1">
      <h1>2</h1>
      </div>
    </header>
  );
};

export default SearchInput;
