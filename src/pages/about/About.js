import React from 'react';

const About = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">About Us</h1>
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <p>
                        Welcome to our application! This project is designed to showcase the power of modern web technologies, 
                        providing a seamless and interactive user experience. Using the <strong>Random User API</strong>, 
                        we dynamically generate user profiles to demonstrate fetching, rendering, and organizing data in a visually appealing format.
                    </p>
                    <p>
                        Our goal is to help developers and enthusiasts understand how to work with APIs, manage state in React, 
                        and create responsive UI components using modern front-end practices. Whether you're a beginner or an experienced developer, 
                        this application is a great resource for learning and experimenting.
                    </p>
                    <p>
                        Feel free to explore, learn, and customize! If you have any feedback or ideas, we'd love to hear from you. 
                        Thank you for visiting our application!
                    </p>
                    <p className="text-center mt-4">
                        <strong>Happy Coding! 🚀</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
