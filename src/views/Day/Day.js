import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import parseMD from "parse-md";
import { useEffect, useState } from "react";
function Day() {
  let issue = useParams();
  const [loading, setLoading] = useState(true);
  const [DataDayContent, setDataDayContent] = useState({});
  const [DataDayMetaData, setDataDayMetaData] = useState({});
  const [Issue, setIssue] = useState({});

  useEffect(() => {
    fetch("/data/posts/" + issue.issue + ".md")
      .then((response) => response.text())
      .then((text) => {
        setLoading(false);
        const { metadata, content } = parseMD(text);
        setDataDayContent(content);
        setDataDayMetaData(metadata);
        setIssue(issue.issue);
      });
  }, [issue]);
  return loading ? (
    <div>hey wait...</div>
  ) : Object.keys(DataDayMetaData).length === 0 ? (
    <div>
      <p>Not a valid date (or that day we weren't around)</p>
      <p>
        <a href="/hp">home page</a>
      </p>
    </div>
  ) : (
    <>
      <div className="columns">
        <div className="column is-half">
          <div className="issue">{DataDayMetaData.issue}</div>
          <center>{DataDayMetaData.date}</center>
        </div>
        <div className="column is-half">
          <article className="fivelinks">
            <h2>
              {DataDayMetaData.type} {DataDayMetaData.title}
            </h2>
            <ReactMarkdown linkTarget="_blank">{DataDayContent}</ReactMarkdown>
          </article>
        </div>
      </div>
      <div className="columns">
        <div className="column is-full">
          <div className="homepage">
            <a href={"/day/" + (parseInt(Issue) - 1)}>prev</a> |{" "}
            <a href="/">home page</a> |{" "}
            <a href={"/day/" + (parseInt(Issue) + 1)}>next</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Day;
