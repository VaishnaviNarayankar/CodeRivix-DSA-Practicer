import { useNavigate } from "react-router-dom";
import { dsaData } from "../data/dsaData";

function Topics({ selectedTopic, setSelectedTopic }) {

  const navigate = useNavigate();

  const handleTopicClick = (topic) => {

    const token = localStorage.getItem("token");

    if (!token) {

      alert("🔒 Please login first to access DSA problems.");

      navigate("/login");

      return;
    }

    setSelectedTopic(topic);

  };

  return (

    <section
      id="topics"
      className="topics-section"
    >

      <h2 className="section-heading">
        DSA Topics
      </h2>

      <div className="topics-grid">

        {dsaData.map((topic) => (

          <div
            key={topic.topic}
            className={`topic-card ${
              selectedTopic === topic.topic
                ? "active-topic"
                : ""
            }`}
            onClick={() => handleTopicClick(topic.topic)}
          >

            {topic.topic}

          </div>

        ))}

      </div>

    </section>

  );

}

export default Topics;