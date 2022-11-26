import React, { useEffect, useState } from "react";
import NumberList from "../../components/NumberList.js";
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
    <div>
      <h2 className="color">2022</h2>
      <NumberList data={data} />
    </div>
  );
};

export default Homepage;
