import { Routes } from "react-router-dom";
import { Route } from 'react-router';
import { DefaultLayout } from "./layouts";
import { Home } from "./pages/home";
import { PostViewer } from "./pages/PostViewer";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/:postNumber" element={<PostViewer />} />
            </Route>
        </Routes>
    )
}