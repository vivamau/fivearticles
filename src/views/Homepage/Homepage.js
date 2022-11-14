import React, { useEffect, useState } from "react";

const Homepage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`/data/posts/index.json`)
      .then((response) => response.json())
      .then((data) => {
        data = data.sort((a, b) =>
          a.issue > b.issue ? 1 : b.issue < a.issue ? -1 : 0
        );
        setData(data);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <div>wait...</div>
  ) : (
    data.map((day, i) =>
      i % 5 === 0 ? (
        <div className="column">
          <p>
            <a href={"day/" + day.issue}>{day.issue}</a>
            <hr />
          </p>
        </div>
      ) : (
        <p>
          <a href={"day/" + day.issue}>{day.issue}</a>
        </p>
      )
    )
  );
};

export default Homepage;
