import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

function Progress() {
    const dictionary_list = useSelector((state) => state.dictionary.list);
    // console.log(dictionary_list);
    let count = 0;
    dictionary_list.map((d, idx) => {
        if (d.completed) {
            count++;
        }
    });
    // console.log(count);

    return (
        <ProgressBar>
            <HighLight width={(count / dictionary_list.length) * 100 + "%"} />
            <Dot>
                <i class="nes-pokeball"></i>
            </Dot>
        </ProgressBar>
    );
}

const ProgressBar = styled.div`
    background: #eee;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    margin-top: 40px;
    margin-bottom: 30px;
`;

const HighLight = styled.div`
    background: #fdd791;
    transition: 1s width;
    width: ${(props) => props.width};
    height: 50px;
    border-radius: 10px;
`;

const Dot = styled.div`
    width: 40px;
    height: 100px;
    margin: 15px 0px 0px -20px;
`;

export default Progress;
