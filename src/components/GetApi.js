import { useEffect, useState } from "react";

function ReactAsync() {
  const [char, Setchar] = useState([]);
  useEffect(() => {
    fetch("https://hey-arnold-api.herokuapp.com/api/v1/characters")
      .then((response) => response.json())
      .then((data) => Setchar(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(ReactAsync);

return (
    <>
    {char.map(item => (
        <div className="container" id="char-card">
        <p>{item.name}</p>
        <img src={item.image}></img>
        </div>
    ))}
    </>
)
}

export default ReactAsync;
