import { useMemo } from "react";
import { getHeroByPublisher } from "../../selectors/getHeroByPublisher";
import HeroCard from "../HeroCard/HeroCard";

const HeroList = ({ publisher }) => {

  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher])

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
      {
        //Destructuring the object in a React component is equal to pass
        //Each key and value of the object as a prop of the component.
        heroes.map(hero => (
          <HeroCard
            key={hero.id}
            {...hero}
          />
        ))
      }
    </div>
  );
};

export default HeroList;
