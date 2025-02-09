import "../App.css";
import "./common.css";

function Subtitle({ title, subtitle, P }) {
  return (
    <>
      <div className="common-title">
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
      </div>
      <p className="common-sub">{P}</p>
    </>
  );
}

export default Subtitle;
