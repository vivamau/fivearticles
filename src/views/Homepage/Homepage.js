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
  /*
  function ListItem(props) {
    const value = props.day;
    return <p>{value}</p>;
  }

  function NumberList(props) {
    const days = props.data;
    console.log(days);
    var listItems = [];
    for (let i = 0; i < days.length; i++) {
      let day = days[i];
      if (i !== 0 && i % 5 === 0) {
        const items = listItems.map((day, i) => (
          <ListItem day={day.issue} key={i} />
        ));
        return <div className="column">{items}</div>;
      } else {
        listItems.push(day);
      }
    }
  }
*/
  return loading ? <div>wait...</div> : <NumberList data={data} />;
};

export default Homepage;
