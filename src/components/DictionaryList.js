import React from "react";
import styled from "styled-components";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function DictionaryList() {
    const navigate = useNavigate();
    const data = useSelector((state) => state);
    // console.log(data);
    // console.log(data.dictionary.list);

    return (
        <div>
            <ListStyle>
                {data.dictionary.list.map((list, index) => {
                    return (
                        <ItemStyle
                            is_completed={list.completed}
                            className="nes-container is-rounded"
                            key={index}
                            onClick={() => {
                                navigate("/detail/" + index);
                            }}
                            style={{ margin: "10px" }}
                        >
                            <EachWord className="nes-container with-title is-centered">
                                <span className="nes-text is-primary title">
                                    Word:{" "}
                                </span>
                                <p style={{ whiteSpace: "initial" }}>
                                    {list.word}
                                </p>
                            </EachWord>
                            <EachWord className="nes-container with-title is-centered">
                                <span className="nes-text is-success title">
                                    Explanation:{" "}
                                </span>
                                <p style={{ whiteSpace: "initial" }}>
                                    {list.exp}
                                </p>
                            </EachWord>
                            <EachWord className="nes-container with-title is-centered">
                                <span className="nes-text is-error title">
                                    Example:{" "}
                                </span>
                                <p>{list.example}</p>
                            </EachWord>
                        </ItemStyle>
                    );
                })}
            </ListStyle>
            <Line />
            <Input>
                <AddCircleIcon
                    className="icon"
                    style={{
                        width: "100%",
                        height: "100%",
                        cursor: "pointer",
                    }}
                    onClick={() => {
                        navigate("/create");
                    }}
                />
            </Input>
        </div>
    );
}

const ListStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 50vh
    overflow-x: hidden;
    overflow-y: auto; 
    max-height: 50vh;
    margin-top: 10px
`;

const Line = styled.hr`
    border: 2px dotted black;
`;

const ItemStyle = styled.div`
    padding: 16px;
    background-color: ${(props) =>
        props.is_completed ? "#fdd791" : "aliceblue"};
`;

const EachWord = styled.div`
    overflow-wrap: break-word;
`;

const Input = styled.div`
    width: 150px;
    min-height: 15vh;
    background-color: #fff;
    margin: auto;
    position: absolute;
    bottom: 0;
    right: 0;
`;
export default DictionaryList;
