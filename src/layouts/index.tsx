import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./defaultLayout/styles";

export function DefaultLayout() {
    return (
        <div>
            <Header />
            <LayoutContainer>
                <Outlet />
            </LayoutContainer>
        </div>
    )
}