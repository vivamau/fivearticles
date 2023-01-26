const GroupItems = (props) => {
  return props.link.date.length !== 0 ? (
    <div className="issueNumber">
      <a href={"day/" + props.link.issue}>{props.link.issue}</a>
    </div>
  ) : (
    <></>
  );
};
export default GroupItems;
