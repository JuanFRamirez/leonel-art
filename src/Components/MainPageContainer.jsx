import BigTitle from "./BigTitle";
import Widget from "./Widget";
import Value from "./Value";
const MainPageContainer = () => {
  return (
    <div className="mn">
      <BigTitle title={"INTRO"} />
      <Widget
        styleClass={
          "main-page-w animate__animated animate__fadeInUp animate__delay-2.2s"
        }
        text="Lorem irure qui eu do elit sunt enim aliquip. Mollit proident in ullamco consequat fugiat tempor. Officia id ut do laboris commodo ullamco ex eu ea incididunt. Consectetur labore dolor laborum ut."
      />
      <Value
        text="Lorem esse id voluptate aute."
        styleClass={
          "value-text animate__animated animate__fadeInUp"
        }
      />
      <img src="../imgs/caption.png" alt="rotating logo" className="rotating-logo"/>
    </div>
  );
};

export default MainPageContainer;
