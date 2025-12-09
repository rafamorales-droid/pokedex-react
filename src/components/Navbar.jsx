import { Link, NavLink } from "react-router-dom";

function Navbar() {
    const linkClass = ({ isActive }) =>
        `px-3 py-1 rounded ${isActive ? "bg-slate-700" : "hover:bg-slate-700"}`;

    return (
        <nav className="bg-slate-950 border-b border-slate-800">
            <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
                <Link to="/" className="font-bold text-xl">
                    Pokédex
                </Link>
                <div className="space-x-2">
                    <NavLink to="/" className={linkClass}>
                        Home
                    </NavLink>
                    <NavLink to="/favorites" className={linkClass}>
                        Favoritos
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
