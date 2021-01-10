import { useHistory } from "react-router-dom";

const SelectedHero = ({ selectedHero }) => {
  const history = useHistory();

  const goDetails = (id) => {
    history.push(`/details/${id}`);
  }

  return (
    <>
      <h2>{`${selectedHero.name} is my Hero`}</h2>
      <button onClick={() => goDetails(selectedHero.id)}>
        View Details
      </button>
    </>
  )
}

export default SelectedHero;