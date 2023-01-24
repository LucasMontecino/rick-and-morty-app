import React from "react";

const Characters = ({ characters }) => {
  return (
    <div className="row">
      {characters.map((char, index) => (
        <div key={index} className="col mb-4">
          <div className="card" style={{ minWidth: "200px", height: "420px" }}>
            <img src={char.image} className="card-img-top" alt={char.name} />
            <div className="card-body">
              <h5 className="card-title">{char.name}</h5>
              <hr />
              <p className="card-text">Species: {char.species}</p>
              <p className="card-text">Location: {char.location.name}</p>
              {/* <p>Status: {char.status}</p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
