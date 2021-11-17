import React, {useState} from "react";
import Form from "../../components/Form";
import Card from "../../components/Card";

function Home() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Form
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
            />

            <Card
                password={password}
                email={email}
            />
        </>
    )
}

export default Home;