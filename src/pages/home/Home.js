import React, { useEffect, useState } from 'react';

const Home = () => {
    const [cards, setCards] = useState([]);  

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch('https://reqres.in/api/users');
                if (result.ok) {
                    const data = await result.json();
                    setCards(data.data); 
                } else {
                    throw new Error("Failed to fetch data");
                }
            } catch (error) {
                console.log(error);
            }
        };
        
        fetchData();  
    }, []);

    return (
        <div className="container mt-5">
        <div className="row">
            {
                cards.map((e) => (
                    <div key={e.id} className="col-lg-2 col-md-3 col-sm-6 mb-4">
                        <div className="card shadow-sm card-custom">
                            <img src={e.avatar} className="card-img-top" alt={`${e.first_name} ${e.last_name}`} />
                            <div className="card-body">
                                <h5 className="card-title">{e.first_name} {e.last_name}</h5>
                                <p className="card-text">{e.email}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    );
}

export default Home;
