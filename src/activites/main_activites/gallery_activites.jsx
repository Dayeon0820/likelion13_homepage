import "../../App.css";
import "../activites.css";
import React, { useEffect, useState } from "react";
import CommonActivites from "./common_activites";
import Footer from "../../default/footer";
/*import { Gallery11, Gallery12 } from "../../data/gallery";*/

function ActivitesGallery() {
  const [activeButton, setActiveButton] = useState("12");
  const [Gallery11, setGallery11] = useState([]);
  const [Gallery12, setGallery12] = useState([]);
  useEffect(() => {
    fetch("/api/post/all?semester=11&type=activity") // 11기
      .then((response) => response.json())
      .then((data) => setGallery11(data)) // 가져온 데이터를 상태에 저장
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  useEffect(() => {
    fetch("/api/post/all?semester=12&type=activity") // 12기
      .then((response) => response.json())
      .then((data) => setGallery12(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  useEffect(() => console.log(Gallery11), [Gallery11]);
  return (
    <div id="page_container">
      <div id="atv-project_header">
        <div
          className={`atv_footer-btn ${
            activeButton === "11"
              ? "atv_footerBtn_clicked"
              : "atv_footerBtn_default"
          }`}
          onClick={() => {
            setActiveButton("11");
            console.log(activeButton);
          }}
        >
          11기
        </div>
        <div
          className={`atv_footer-btn ${
            activeButton === "12"
              ? "atv_footerBtn_clicked"
              : "atv_footerBtn_default"
          }`}
          onClick={() => setActiveButton("12")}
        >
          12기
        </div>
      </div>
      <section id="atv-project_main">
        <div id="atv-project-main_container">
          {activeButton === "11" ? (
            <>
              {Gallery11.map((i) => (
                <CommonActivites
                  title={i.title}
                  subtitle={i.subtitle}
                  imageUrl={i.postImages[0].imageUrl}
                />
              ))}
            </>
          ) : (
            <>
              {Gallery12.map((i) => (
                <CommonActivites
                  title={i.title}
                  subtitle={i.subtitle}
                  imageUrl={i.postImages[0].imageUrl}
                />
              ))}
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default ActivitesGallery;
