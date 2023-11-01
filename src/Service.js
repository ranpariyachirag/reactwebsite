import { useEffect, useState } from "react";

const Service = () => {
  const [cards, setCards] = useState([]);

  const getData = async () => {
    const res = await fetch("https://dummyjson.com/products");

    const allData = await res.json();

    setCards(allData.products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="text-center"> Our Services </h1>
      <div className="container_fluid mt-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="gridLayout">
                {cards.map((card) => {
                  return (
                    <div className="card" key={card.id}>
                      <img
                        src={card.thumbnail}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.description}</p>
                        <strong>${card.price}</strong>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
