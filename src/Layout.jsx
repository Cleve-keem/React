import { NavLink, Outlet } from "react-router-dom"

function Layout(){
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="blogs">Blogs</NavLink>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout