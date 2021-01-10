import { useHero } from '../hook/useHero';
import './Hero.css';

const Hero = () => {
  const { hero, changeHero, goBack } = useHero();

  return (
    <div>
      <h2>{hero?.name} Details</h2>
      <div>
        <span>id: </span>
        {hero?.id}
      </div>
      <div>
        <label>name:
          <input value={hero?.name} placeholder="name" onChange={changeHero} />
        </label>
      </div>
      <button onClick={goBack}>go back</button>
    </div>
  )
}

export default Hero;