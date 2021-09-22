import { useEffect, useState } from "react";
import './App.css';
import CocktailFilterForm from "./Components/CocktailFilterForm";
import ListCocktail from "./Components/ListCocktail";
import Loading from "./Components/Loading";


function App() {
  const [cocktailList, setCocktailList] = useState();
  const [filters, setFilters] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCocktailList() {
      try {
        const reqUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${filters}`;
        const res = await fetch(reqUrl).then();
        const resJSON = await res.json();
        const { drinks } = resJSON;
        console.log({ drinks });
        setCocktailList(drinks)
        setLoading(false)
      } catch (err) {
        console.log({ err });
      }
    }
    fetchCocktailList();
  }, [filters])

  //Filter
  function handleFilterChange(newFilter) {
    // console.log({ newFilter });
    setLoading(true)
    setFilters(newFilter)
  }


  return (
    <>
      <CocktailFilterForm onSubmit={handleFilterChange} />
      {loading ?
        <Loading /> :
        <ListCocktail cocktails={cocktailList} />
      }
    </>
  );
}

export default App;
