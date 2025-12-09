import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error capturado por ErrorBoundary:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-4 bg-red-700 rounded-lg">
                    <h2 className="text-xl font-bold mb-2">
                        Ups, algo salió mal 😢
                    </h2>
                    <p>Intenta recargar la página.</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
