import { Outlet } from "react-router-dom";
import logoGitHub from '../../assets/logo.svg'
import { Header } from "./styles";

export function DefaultLayout() {
    return (
        <>
            <Header>
                <img src={logoGitHub} />
            </Header>

            <Outlet />
        </>
    )
}