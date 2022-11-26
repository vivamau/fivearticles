import GroupItems from "../components/GroupItems";
const NumberList = (props) => {
  const days = props.data;
  let grouped = [];
  let listItems = [];
  for (let i = 0; i < days.length; i++) {
    if (i !== 0 && i % 10 === 0) {
      grouped.push(listItems);
      listItems = [];
    }
    listItems.push(days[i]);
  }
  grouped.push(listItems);
  return (
    <div className="columns is-mobile">
      <GroupItems items={grouped} />
    </div>
  );
};

export default NumberList;
