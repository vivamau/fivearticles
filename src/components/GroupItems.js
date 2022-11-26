const GroupItems = (props) => {
  const linksGroups = props.items;
  return linksGroups.map((links, i) => (
    <div className="column" key={i}>
      {links.map((link, j) => (
        <div className="issueNumber" key={j}>
          <a href={"day/" + link.issue}>{link.issue}</a>
        </div>
      ))}
    </div>
  ));
};
export default GroupItems;
