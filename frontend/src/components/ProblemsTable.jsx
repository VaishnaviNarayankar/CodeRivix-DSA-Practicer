import { dsaData } from "../data/dsaDAta";
import { useEffect } from "react";

function ProblemsTable({ selectedTopic }) {

  if (!selectedTopic) {
    return null;
  }

  const topic = dsaData.find(
    (t) => t.topic === selectedTopic
  );

  if (!topic) {
    return null;
  }

  useEffect(() => {
    if(selectedTopic){
        document.querySelector(".tables-wrap")
            ?.scrollIntoView({
                behavior:"smooth"
            });
    }
}, [selectedTopic]);

  return (

  <div className="tables-wrap">

    <h2 className="section-heading">
      {topic.topic}
    </h2>

    <div className="table-container">

      <table className="problems-table">

        <thead>

          <tr>

            <th>Problem</th>

            <th>Difficulty</th>

            <th>LeetCode</th>

            <th>Video Solution</th>

          </tr>

        </thead>

        <tbody>

          {topic.problems.map((problem, index) => (

            <tr key={index}>

              <td className="problem-title">
                {problem.title}
              </td>

              <td className={problem.difficulty.toLowerCase()}>
                {problem.difficulty}
              </td>

              <td>

                <a
                  href={problem.leetcode}
                  target="_blank"
                  rel="noreferrer"
                >
                  Solve
                </a>

              </td>

              <td className="yt">

                <a
                  href={problem.youtube}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch
                </a>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </div>

);
}

export default ProblemsTable;