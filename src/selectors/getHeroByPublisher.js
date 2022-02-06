import { heroes } from '../data/heroes';

/**
 * 
 * @param string publisher
 * @returns filtered heroe's list
 */
export const getHeroByPublisher = (publisher) => {
  return heroes.filter(hero => hero.publisher.includes(publisher))
}