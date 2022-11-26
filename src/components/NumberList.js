import GroupItems from "../components/GroupItems";
const NumberList = (props) => {
  const days = props.data;
  let grouped = [];
  let listItems = [];
  for (let i = 0; i < days.length; i++) {
    if (i !== 0 && i % 5 === 0) {
      grouped.push(listItems);
      listItems = [];
    } else {
      listItems.push(days[i]);
    }
  }

  return (
    <div className="columns">
      <GroupItems items={grouped} />
    </div>
  );
};

export default NumberList;
