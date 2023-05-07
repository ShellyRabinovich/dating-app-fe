import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../login/Login"
import Register from "../register/Register"
import Footer from "./footer/Footer"
import '../styles/styles.css'
import Header from "./header/Header"
import "./Layout.css"
import Menu from "./menu/Menu"

function Layout() {
    return (
        <section className="layout">
            <header className="header">
                <Header></Header>
            </header>
            <aside>
                <Menu></Menu>
            </aside>
            <main className="main">
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </BrowserRouter>
            </main>
            <footer className="footer">
                <Footer></Footer>
            </footer>
        </section>
    )
}
export default Layout
