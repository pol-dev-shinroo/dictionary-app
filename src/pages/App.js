import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "nes.css/css/nes.min.css";
import "styles/App.css";

// import components:
import AppRouter from "components/Router";
import Progress from "components/Progress";
import Spinner from "components/Spinner";
import GithubIcon from "components/GithubIcon";

// from redux:
import { loadDictionaryFB } from "../redux/modules/dictionary";

function App() {
    const dispatch = useDispatch();
    const is_loaded = useSelector((state) => state.dictionary.is_loaded);

    React.useEffect(() => {
        dispatch(loadDictionaryFB());
    }, []);
    console.log(dispatch(loadDictionaryFB));
    dispatch(loadDictionaryFB);

    return (
        <>
            <Container className="nes-container">
                <Title className="nes-text">MY DICTIONARY</Title>
                <Progress></Progress>
                <Line />
                <AppRouter />
            </Container>
            <GithubIcon />
            {!is_loaded && <Spinner />}
        </>
    );
}

const Container = styled.div`
    max-width: 500px;
    min-height: 90vh;
    padding: 16px;
    margin: 20px auto;
    position: relative;
`;

const Title = styled.h1`
    text-align: center;
`;

const Line = styled.hr`
    border: 2px dotted black;
`;

export default App;
