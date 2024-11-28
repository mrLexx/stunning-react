export const metadata = {
    title: "Restaurants",
    description: "list Restaurants",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
