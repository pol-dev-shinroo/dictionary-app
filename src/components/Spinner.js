import React from "react";
import styled from "styled-components";

const Spinner = () => {
    return (
        <Outter>
            <i
                class="nes-ash"
                style={{ color: "#637ab7", fontSize: "150px" }}
            />
            <h1>Loading...</h1>
        </Outter>
    );
};

const Outter = styled.div`
    background: orange;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Spinner;
