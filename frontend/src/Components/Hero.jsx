import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="hero">

            <h1>
                Master Data Structures & Algorithms
            </h1>

            <p>
                Preactice hand-picked problems across Arrays, linked Lists, Trees, Graphs, and more. Strengthen your skills with challenges designed for beginners to advanced coders.
                
            </p>

            <button
    className="start-btn"
    onClick={() => {
        document
            .getElementById("topics")
            .scrollIntoView({
                behavior: "smooth"
            });
    }}
>
    Start Learning
</button>

        </section>
    );
}

export default Hero;