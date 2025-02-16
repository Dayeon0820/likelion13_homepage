import "../../App.css";
import "../activites.css";

function CommonActivites({ title, subtitle, imageUrl }) {
  return (
    <>
      <div className="common_atvBox">
        <div className="common_atv-img">
          <img
            src={imageUrl}
            onError={(e) => (e.target.src = "/project.png")}
          />
        </div>
        <h4 className="common_atv-subtitle">{subtitle}</h4>

        <div className="common_atv-name">
          <h2>{title}</h2>
          {/*
          <div className="common_atv-part">1등 수상</div>
          */}
        </div>
      </div>
    </>
  );
}
export default CommonActivites;
