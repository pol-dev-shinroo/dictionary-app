import React from "react";
import { useParams } from "react-router-dom";
import {
    removeDictionary,
    updateComplete,
    updateNotComplete,
    updateCompleteFB,
    updateNotCompleteFB,
    deleteBucketFB,
} from "./redux/modules/dictionary";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Detail() {
    const navigate = useNavigate();
    // url parameter = index
    const index = useParams();

    // get data from redux
    const data = useSelector((state) => state);
    // console.log(data);
    const dictionary_word = data.dictionary.list[index.index].word;
    const dictionary_exp = data.dictionary.list[index.index].exp;
    const dictionary_example = data.dictionary.list[index.index].example;

    // console.log(dictionary_word, dictionary_exp, dictionary_example);
    // remove dictionaryList
    const dispatch = useDispatch();
    const removeDict = () => {
        // dispatch(removeDictionary(parseInt(index.index)));
        dispatch(deleteBucketFB(data.dictionary.list[index.index].id));
        navigate("/");
    };

    return (
        <>
            <h3>Want some details?</h3>
            <DictionaryName>Word: {dictionary_word}</DictionaryName>
            <DictionaryName>Explanation: {dictionary_exp}</DictionaryName>
            <DictionaryName>Example: {dictionary_example}</DictionaryName>
            <ButtonField>
                <Button>
                    <button
                        class="nes-btn is-success"
                        style={{ display: "block", width: "100%" }}
                        onClick={() => {
                            dispatch(
                                updateCompleteFB(
                                    data.dictionary.list[index.index].id
                                )
                            );
                            navigate("/");
                        }}
                    >
                        Completed
                    </button>
                </Button>
                <Button>
                    <button
                        class="nes-btn is-error"
                        style={{ display: "block", width: "100%" }}
                        onClick={() => {
                            dispatch(
                                updateNotCompleteFB(
                                    data.dictionary.list[index.index].id
                                )
                            );
                            navigate("/");
                        }}
                    >
                        Refresh
                    </button>
                </Button>
                <Button>
                    <button
                        class="nes-btn is-primary"
                        style={{ display: "block", width: "100%" }}
                        onClick={removeDict}
                    >
                        Delete
                    </button>
                </Button>
                <Button>
                    <button
                        class="nes-btn is-warning"
                        style={{ display: "block", width: "100%" }}
                        onClick={() => {
                            navigate(`/detail/${index.index}/update`);
                        }}
                    >
                        Update
                    </button>
                </Button>
                <Button>
                    <button
                        class="nes-btn"
                        style={{ display: "block", width: "100%" }}
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        Go back
                    </button>
                </Button>
            </ButtonField>
        </>
    );
}

const DictionaryName = styled.div`
    font-size: 20px;
    background-color: yellow;
    position: relative;
`;

const ButtonField = styled.div`
    position: absolute;
    bottom: 0;
    width: 90%;
`;

const Button = styled.div`
    margin-top: 20px;
`;

export default Detail;
