import "../styles/global.css"
import "../styles/general.css"

import MainLayout from "../src/components/layout/main-layout"

export default function App({ Component, pageProps }) {
    return (
        <>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </>
    )
}
