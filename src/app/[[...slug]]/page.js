import "../../index.css";
import { App } from "./app.js";

export function generateStaticParams() {
    return [{ slug: [""] }];
}

export default function Page() {
    return <App />;
}
