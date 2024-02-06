import "./main.css";
import FakeData from "../fakeData/FakeData";
import {
  HiOutlineClipboardCheck,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const Main = () => {
  console.log(FakeData);
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>
      <div className="secContent grid">
        {FakeData.map((place, i) => {
          return (
            <div key={i} className="singleDestination">
              <div className="imageDiv">
                <img src={place.imgSrc} alt={place.destTitle} />
              </div>
              <div className="cardInfo">
                <h4 className="destTitle">{place.destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{place.location}</span>
                </span>
                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {place.grade}
                      <small>+1</small>
                    </span>
                  </div>
                  <div className="price">
                    <h5>{place.fees}</h5>
                  </div>
                </div>
                <div className="desc">
                  <p>{place.description}</p>
                </div>
                <button className="mainBtn btn flex">
                  DETAILS{" "}
                  <HiOutlineClipboardCheck className="mainBtnIcon icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
