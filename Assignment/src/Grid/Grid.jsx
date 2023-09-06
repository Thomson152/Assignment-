import "./Grid.css";
import RatingIcon from "./RatingIcon";

const Grid = () => {
  const data = [
    { name: "Winter Orbit", rating: 5, id: 1 },
    { name: "Dial D for Deadman", rating: 4, id: 2 },
  ];

  return (
    <div>
      <div className="card-container">
        {data.map((item) => {
          return (
            <>
              <div key={item.id} className="card">
                <h1>{item.name}</h1>
                <p>Rating: {item.rating}/5</p>
                <RatingIcon rating={item.rating} />
              </div>
            </>
          );
        })}
      </div>

      <div className="grid-container">
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      </div>
      <div className="grid-container2">
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      </div>
    </div>
  );
};

export default Grid;
