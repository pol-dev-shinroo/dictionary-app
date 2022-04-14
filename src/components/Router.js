// import React-related
import React from "react";
import { Routes, Route } from "react-router-dom";

// import components
import DictionaryList from "components/DictionaryList";
import CreateDict from "pages/CreateDict";
import Detail from "pages/Detail";
import NotFound from "pages/NotFound";
import Update from "pages/Update";

function AppRouter() {
    return (
        <Routes>
            <Route exact path="/" element={<DictionaryList />} />
            <Route exact path="/detail/:index" element={<Detail />} />
            <Route exact path="/create" element={<CreateDict />} />
            <Route exact path="/detail/:index/update" element={<Update />} />
            <Route exact path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRouter;
