import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from './layouts/'
import { Home } from './pages/Home'
import { Post } from "./pages/Post";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="posts/:id" element={<Post />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}