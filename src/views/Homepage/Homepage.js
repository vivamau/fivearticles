import React, { useEffect, useState } from "react";

const Homepage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`/data/posts/index.json`)
      .then((response) => response.json())
      .then((data) => {
        setData(
          data.sort((a, b) =>
            a.issue < b.issue ? 1 : b.issue < a.issue ? -1 : 0
          )
        );
        setLoading(false);
      });
  }, []);
  return loading ? (
    <div>wait...</div>
  ) : (
    data.map((day, i) => (
      <li>
        <a href={"day/" + day.issue}>{day.issue}</a>
      </li>
    ))
  );
};

export default Homepage;
