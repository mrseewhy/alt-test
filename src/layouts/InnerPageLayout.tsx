


import { Outlet, useMatches } from "react-router-dom";
import Header from "../components/Header";

interface RouteHandle {
    header?: string | ((data: unknown, params: unknown) => string);
}

const InnerPageLayout: React.FC = () => {
    const matches = useMatches();
    const match = [...matches].reverse().find((m) => (m.handle as RouteHandle)?.header);
    const headerValue = (match?.handle as RouteHandle)?.header;
    const displayTitle: string = typeof headerValue === "function"
        ? headerValue(match?.data, match?.params)
        : headerValue || "Default Title";

    return (
        <div>
            <Header header={displayTitle} />
            <Outlet />
        </div>
    );
}

export default InnerPageLayout;