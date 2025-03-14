import Hero from "../../components/Product/Hero";
import { Outlet } from "react-router-dom";

export default function MainProduct() {
    return (
        <>
            <Hero />
            <Outlet />
        </>
    );
}