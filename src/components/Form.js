import React from "react";

const Form = props => (
    <div>
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="Your City" />
            <input type="text" name="country" placeholder="Your Country" />
            <button>Get Weather</button>
        </form>
    </div>
);

export default Form;