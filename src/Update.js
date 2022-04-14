import React, { useState } from "react";
import styled from "styled-components";
import "nes.css/css/nes.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    updateDictionary,
    updateDictionaryFB,
} from "./redux/modules/dictionary";

function Update() {
    const navigate = useNavigate();
    const index = useParams();
    console.log(index);
    console.log(index.index);

    const data = useSelector((state) => state);
    console.log(data.dictionary.list[index.index]);
    const dictionary_word = data.dictionary.list[index.index].word;
    const dictionary_exp = data.dictionary.list[index.index].exp;
    const dictionary_example = data.dictionary.list[index.index].example;
    const is_complete = data.dictionary.list[index.index].completed;

    const [_word, setWord] = useState(dictionary_word);
    const [_exp, setExp] = useState(dictionary_exp);
    const [_example, setExample] = useState(dictionary_example);

    console.log(_word, _exp, _example, is_complete);

    const dispatch = useDispatch();
    const updatedDictionary = {
        word: _word,
        exp: _exp,
        example: _example,
        completed: is_complete,
    };

    const updateDictionaryFunction = () => {
        // dispatch(updateDictionary(index.index, updatedDictionary));
        dispatch(
            updateDictionaryFB(
                data.dictionary.list[index.index].id,
                updatedDictionary,
                index.index
            )
        );
        navigate("/");
        // window.location.assign("http://localhost:3000/");
    };

    return (
        <>
            <Title>Update your Dictionary...</Title>
            <InputField>
                <EachInput>
                    <label htmlFor="wordInput">New word:</label>
                    <input
                        type="text"
                        id="wordInput"
                        className="nes-input is-error"
                        placeholder={dictionary_word}
                        value={_word}
                        onChange={(e) => setWord(e.target.value)}
                        maxLength="20"
                    />
                </EachInput>
                <EachInput>
                    <label htmlFor="textarea_field">Explanation: </label>
                    <textarea
                        id="textarea_field"
                        class="nes-textarea is-success"
                        placeholder={dictionary_exp}
                        value={_exp}
                        onChange={(e) => setExp(e.target.value)}
                    ></textarea>
                </EachInput>
                <EachInput>
                    <label htmlFor="textarea_field">Examples: </label>
                    <textarea
                        id="textarea_field"
                        class="nes-textarea is-warning"
                        placeholder={dictionary_example}
                        value={_example}
                        onChange={(e) => setExample(e.target.value)}
                    ></textarea>
                </EachInput>
            </InputField>
            <ButtonField>
                <button
                    class="nes-btn is-success"
                    style={{ width: "100%", marginTop: "60px" }}
                    onClick={updateDictionaryFunction}
                >
                    Update!
                </button>
            </ButtonField>
        </>
    );
}

const Title = styled.p`
    font-size: 17px;
    margin-top: 20px;
`;

const InputField = styled.div`
    margin-top: 30px;
    position: relative;
`;

const EachInput = styled.div`
    margin-top: 30px;
`;

const ButtonField = styled.div`
    display: flex;
    align-items: center
    position: absolute;
    width: 100%;
    bottom: 0;
`;

export default Update;
