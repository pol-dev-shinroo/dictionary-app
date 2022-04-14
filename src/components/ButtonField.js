import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
    updateCompleteFB,
    updateNotCompleteFB,
    deleteBucketFB,
} from "redux/modules/dictionary";

function ButtonField() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const index = useParams();
    const data = useSelector((state) => state);

    const updateComplete = () => {
        dispatch(updateCompleteFB(data.dictionary.list[index.index].id));
        navigate("/");
    };

    const updateNotComplete = () => {
        dispatch(updateNotCompleteFB(data.dictionary.list[index.index].id));
        navigate("/");
    };

    const removeDict = () => {
        dispatch(deleteBucketFB(data.dictionary.list[index.index].id));
        navigate("/");
    };

    const moveUpdate = () => {
        navigate(`/detail/${index.index}/update`);
    };

    const moveHome = () => {
        navigate("/");
    };

    return (
        <BtnField>
            <Button>
                <button
                    class="nes-btn is-success"
                    style={{ display: "block", width: "100%" }}
                    onClick={updateComplete}
                >
                    Completed
                </button>
            </Button>
            <Button>
                <button
                    class="nes-btn is-error"
                    style={{ display: "block", width: "100%" }}
                    onClick={updateNotComplete}
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
                    onClick={moveUpdate}
                >
                    Update
                </button>
            </Button>
            <Button>
                <button
                    class="nes-btn"
                    style={{ display: "block", width: "100%" }}
                    onClick={moveHome}
                >
                    Go back
                </button>
            </Button>
        </BtnField>
    );
}

const BtnField = styled.div`
    position: absolute;
    bottom: 0;
    width: 90%;
`;

const Button = styled.div`
    margin-top: 20px;
`;

export default ButtonField;
