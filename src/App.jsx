import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PokemonDetail from "./pages/PokemonDetail";
import Favorites from "./pages/Favorites";
import ErrorBoundary from "./errors/ErrorBoundary";

function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100">
            <Navbar />
            <div className="max-w-5xl mx-auto p-4">
                <ErrorBoundary>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/pokemon/:name" element={<PokemonDetail />} />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route
                            path="*"
                            element={<h2>404 - Página no encontrada</h2>}
                        />
                    </Routes>
                </ErrorBoundary>
            </div>
        </div>
    );
}

export default App;
