"use client";

import dynamic from "next/dynamic";

const AppComponent = dynamic(() => import("../../app.jsx"), { ssr: false });

export const App = () => {
    return <AppComponent />;
};
