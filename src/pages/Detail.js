// import React-related
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

// import components
import ButtonField from "components/ButtonField";

function Detail() {
    const index = useParams();
    const data = useSelector((state) => state);

    const dictionary_word = data.dictionary.list[index.index].word;
    const dictionary_exp = data.dictionary.list[index.index].exp;
    const dictionary_example = data.dictionary.list[index.index].example;

    return (
        <>
            <Title>Want some details?</Title>
            <DictionaryName>Word: {dictionary_word}</DictionaryName>
            <DictionaryName>Explanation: {dictionary_exp}</DictionaryName>
            <DictionaryName>Example: {dictionary_example}</DictionaryName>
            <ButtonField />
        </>
    );
}

const Title = styled.h3``;

const DictionaryName = styled.div`
    font-size: 20px;
    background-color: yellow;
    position: relative;
    overflow-wrap: break-word;
`;

export default Detail;
