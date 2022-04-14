import React from "react";

function GithubIcon() {
    return (
        <i
            class="nes-icon github is-large"
            style={{ position: "absolute", top: "0", right: "0" }}
            onClick={() => {
                window.location.assign(
                    "https://github.com/pol-dev-shinroo/dictionary-app"
                );
            }}
        ></i>
    );
}

export default GithubIcon;
