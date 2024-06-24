import Head from "next/head";
import { useSelector } from "react-redux";

import Quiz from "./Quiz";
import { useAppState } from "./stateService";

export default () => {
  const { dispatchUpdate } = useAppState(); // Use o hook personalizado

  const centerSideBarMarginTop = useSelector(
    (state) => state.stylization.centerSideBarMarginTop
  );

  const centerBackgroundColor = useSelector(
    (state) => state.stylization.centerBackgroundColor
  );

  const centerSideBarWidth = useSelector(
    (state) => state.stylization.centerSideBarWidth
  );

  const centerSideBarLeft = useSelector(
    (state) => state.stylization.centerSideBarLeft
  );
  const showCenterPlace = useSelector(
    (state) => state.booleans.showCenterPlace
  );

  const showQuizCenterPlace = useSelector(
    (state) => state.booleans.showQuizCenterPlace
  );

  const showVisitantesCenterPlace = useSelector(
    (state) => state.booleans.showVisitantesCenterPlace
  );

  const showTimerCenterPlace = useSelector(
    (state) => state.booleans.showTimerCenterPlace
  );

  return (
    <>
      <div>
        <Head>
          <style>
            {`
.centerSideBar {
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem;
    width: 80vw;
        border-radius: 50px; /* Bordas arredondadas */
    max-width: 600px;
    height: 80vh;
    max-height: 90vh;
  background-color: rgba(${centerBackgroundColor.r}, ${centerBackgroundColor.g}, ${centerBackgroundColor.b}, ${centerBackgroundColor.a}); 
      padding-left: 7vw;
    padding-right: 7vw;
}
              `}
          </style>
        </Head>
      </div>
      <div className="centerSideBar">
        <Quiz />
      </div>
    </>
  );
};
