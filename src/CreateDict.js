import React from "react";
import styled from "styled-components";
import "nes.css/css/nes.min.css";
import { useNavigate } from "react-router-dom";
import { createDictionary, addDictionaryFB } from "./redux/modules/dictionary";
import { useDispatch } from "react-redux";

function CreateDict() {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const _word = React.useRef(null);
    const _exp = React.useRef(null);
    const _example = React.useRef(null);

    const addDictionaryList = () => {
        dispatch(
            addDictionaryFB({
                word: _word.current.value,
                exp: _exp.current.value,
                example: _example.current.value,
                completed: false,
            })
        );
        // dispatch(
        //     createDictionary({
        //         word: _word.current.value,
        //         exp: _exp.current.value,
        //         example: _example.current.value,
        //     })
        // );
        navigate("/");
    };

    return (
        <div>
            <Title>Create a new dictionary...</Title>
            <InputField>
                <EachInput>
                    <label htmlFor="wordInput">New word:</label>
                    <input
                        ref={_word}
                        type="text"
                        id="wordInput"
                        className="nes-input is-error"
                        placeholder="enter new words..."
                    />
                </EachInput>
                <EachInput>
                    <label htmlFor="textarea_field">Explanation: </label>
                    <textarea
                        ref={_exp}
                        id="textarea_field"
                        class="nes-textarea is-success"
                        placeholder="enter explanation..."
                    ></textarea>
                </EachInput>
                <EachInput>
                    <label htmlFor="textarea_field">Examples: </label>
                    <textarea
                        ref={_example}
                        id="textarea_field"
                        class="nes-textarea is-warning"
                        placeholder="enter examples..."
                    ></textarea>
                </EachInput>
                <button
                    class="nes-btn is-success"
                    style={{ width: "100%", marginTop: "20px" }}
                    onClick={addDictionaryList}
                >
                    ADD
                </button>
                <button
                    class="nes-btn is-warning"
                    style={{ width: "100%", marginTop: "20px" }}
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    Go Back
                </button>
            </InputField>
        </div>
    );
}

const Title = styled.p`
    font-size: 17px;
    margin-top: 20px;
`;

const InputField = styled.div`
    margin-top: 30px;
`;

const EachInput = styled.div`
    margin-top: 30px;
`;

export default CreateDict;
