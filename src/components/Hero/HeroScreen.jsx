import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { getHeroById } from "../../selectors/getHeroById";

const HeroScreen = () => {

  const navigate = useNavigate()

  const { heroId } = useParams();

  //Every time the dependency changes, the callback is executed
  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  const handleReturn = () => {
    navigate(-1);
  }


  if (!hero) {
    return <Navigate to='/' />
  }

  const { id,
    superhero,
    alter_ego,
    publisher,
    first_appearance,
    characters
  } = hero;

  const image = require(`../../assets/${id}.jpg`)

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={image}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group">
          <li className="list-group-item"><b>Alter ego:</b> {alter_ego}</li>
          <li className="list-group-item"><b>Publihser:</b> {publisher}</li>
          <li className="list-group-item"><b>First Appearance:</b> {first_appearance}</li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>

        <button
          className="btn btn-outline-info"
          onClick={handleReturn}
        >
          Regresar
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
