import { Link } from "react-router-dom";

function TopicCard({ topic }) {
    return (
        <Link
            to={`/problems/${topic.toLowerCase().replace(/\s+/g, "-")}`}
            style={{ textDecoration: "none" }}
        >
            <div className="topic-card">
                {topic}
            </div>
        </Link>
    );
}

export default TopicCard;