import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { useMemo } from 'react';
import queryString from 'query-string';
import HeroCard from "../HeroCard/HeroCard";

const SearchScreen = () => {

  const navigate = useNavigate();

  //Hook call to retireve URL params.
  //The difference between useLocation is used when is URLSearchParams and useParams is when they
  //para passed as a route
  const location = useLocation();

  //Call to library to retrieve the params as their value in a JSON,
  //in case there is no param it will return an empty string
  const { q = '' } = queryString.parse(location.search);


  const [{ searchText }, onChange] = useForm({ searchText: q })


  //Filter heroes only when the param changes, this prevents rerender on state change
  const filteredHeroes = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    //Prevent page reload when the form is submitted
    e.preventDefault();

    //This will keep the current URL, but with the new params
    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h1>Searches</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              onChange={onChange}
              value={searchText}
            />
            <button
              className="btn btn-outline-primary mt-3"
              type="submit"
            >
              Find
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {
            (q === '') ?
              <div className="alert alert-info">Buscar un héroe</div>
              : (filteredHeroes.length === 0) &&
              <div className="alert alert-danger">No hay resultados de {q}</div>
          }

          {
            filteredHeroes.map(hero => (
              <HeroCard
                key={hero.id}
                {...hero}
              />
            ))
          }
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
