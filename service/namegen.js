import nouns from '../data/nouns.json';
import adjectives from '../data/adjectives.json';

export default function getName() {
  const getRandomNoun = () => {
    const min = 0;
    const max = nouns.length;
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return nouns[randomNumber];
  };

  const getRandomAdjective = () => {
    const min = 0;
    const max = adjectives.length;
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return adjectives[randomNumber];
  };

  let noun = getRandomNoun();
  let adjective = getRandomAdjective();
  let name = (adjective += noun);

  return name;
}
