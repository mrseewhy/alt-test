import { Outlet, useMatches } from "react-router-dom"
import Header from "../components/Header"

const InnerPageLayout = () => {
    const matches = useMatches();

    const match = [...matches].reverse().find((m) => m.handle?.header);

    const headerValue = match?.handle?.header;

    const displayTitle = typeof headerValue === "function"
        ? headerValue(match.data, match.params)
        : headerValue || "Default Title";

    return (
        <div>

            <Header header={displayTitle} />
            <Outlet />

        </div>
    )
}

export default InnerPageLayout