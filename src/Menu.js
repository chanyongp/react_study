import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Menu</h1>
            <Link to="/Calculator0">Calculator0</Link>
            <div />
            <Link to="/Calculator">Calculator</Link>
        </div>
    );
}