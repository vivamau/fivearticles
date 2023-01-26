import Item from "../components/Item";
const GroupItems = (props) => {
  const linksGroups = props.items;
  return linksGroups.map((links, i) => (
    <div className="column" key={i}>
      {links.map((link, j) => (
        <Item link={link} key={j} />
      ))}
    </div>
  ));
};
export default GroupItems;
