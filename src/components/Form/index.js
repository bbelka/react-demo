import React from 'react';



function Form(props) {


    const handleInputChange = (event) => {
        if (event.target.name === "email") {
            props.setEmail(event.target.value);
            console.log(props.email);
        };
        if (event.target.name === "password") {
            props.setPassword(event.target.value);
            console.log(props.password);
        };
    };

    return (
        <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input
                    value={props.email}
                    onChange={handleInputChange}
                    name="email"
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input
                    value={props.password}
                    onChange={handleInputChange}
                    name="password"
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1" />
            </div>
            <button
                type="submit"
                className="btn btn-primary"
            >Submit</button>
        </form>
    )
}

export default Form;