import React, { useEffect, useState } from 'react';

const Home = () => {
    const [cards, setCards] = useState([]);  

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch('https://randomuser.me/api/?results=10'); // Fetch multiple results
                if (result.ok) {
                    const data = await result.json();
                    setCards(data.results); // Use `data.results` instead of `data.data`
                } else {
                    throw new Error("Failed to fetch data");
                }
            } catch (error) {
                console.error(error);
            }
        };
        
        fetchData();  
    }, []);

    return (
        <div className="container mt-5">
            <div className="row">
                {cards.map((e) => (
                    <div key={e.login.uuid} className="col-lg-2 col-md-3 col-sm-6 mb-4">
                        <div className="card shadow-sm card-custom">
                            <img
                                src={e.picture.large}
                                className="card-img-top"
                                alt={`${e.name.first} ${e.name.last}`}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{e.name.first} {e.name.last}</h5>
                                <p className="card-text">{e.email}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
