import React from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "nes.css/css/nes.min.css";
import "./App.css";

// import components:
import DictionaryList from "./DictionaryList";
import Detail from "./Detail";
import NotFound from "./NotFound";
import Progress from "./Progress";
import CreateDict from "./CreateDict";
import Update from "./Update";
import Spinner from "./Spinner";

// firebase:
import { db } from "./firebase";
import { collection, getDoc, getDocs } from "firebase/firestore";

// from redux:
import { loadDictionaryFB } from "./redux/modules/dictionary";

function App() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const is_loaded = useSelector((state) => state.dictionary.is_loaded);
    const testState = useSelector((state) => state);

    React.useEffect(() => {
        dispatch(loadDictionaryFB());
    }, []);
    console.log(dispatch(loadDictionaryFB));
    dispatch(loadDictionaryFB);

    // React.useEffect(() => {
    //     navigate("/");
    // }, [testState]);

    return (
        <>
            <Container className="nes-container">
                <Title className="nes-text">MY DICTIONARY</Title>
                <Progress></Progress>
                <Line />
                {/* Components */}
                <Routes>
                    <Route exact path="/" element={<DictionaryList />} />
                    <Route exact path="/detail/:index" element={<Detail />} />
                    <Route exact path="/create" element={<CreateDict />} />
                    <Route
                        exact
                        path="/detail/:index/update"
                        element={<Update />}
                    />
                    <Route exact path="*" element={<NotFound />} />
                </Routes>
            </Container>
            <i
                class="nes-icon github is-large"
                style={{ position: "absolute", top: "0", right: "0" }}
                onClick={() => {
                    window.location.assign(
                        "https://github.com/pol-dev-shinroo/dictionary-app"
                    );
                }}
            ></i>

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
