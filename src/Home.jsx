// import Contact from "./components/home/Userinfo";
// import Contact from "./components/home/Time";
// import Contact from "./components/home/Post";
// import Contact from "./components/home/Newsfeed";
import DataFetching from "./components/DataFetching";
import { Link } from "react-router-dom";


function Home() {

  return (
    <div className="container-sm py-2 my-3">
      {/* ROW WITH LEFT AND RIGHT PANEL ***********************************************/}
      <div className="row gy-3 justify-content-between">
        {/* LEFT PANEL ************************************************************** */}
        <div className="col-md-4 shadow border border-1 rounded-2 p-2">

          {/* USERINFO COMPONENT ******************************************************/}
          <div className="m-3 p-2 border border-1 rounded-2">
            <h5>Name: </h5>
            <h5>Email: </h5>
            <p>Bio</p>
          </div>

          {/* TIME COMPONENT **********************************************************/}
          <div className="m-3 p-2 border border-1 rounded-2">
            <h5>Time: </h5>
            <h5>Email: </h5>
            <p>Date</p>
          </div>
        </div>
        {/* END OF LEFT PANEL ******************************************************* */}

        {/* RIGHT PANEL - NEWS FEED COMPONENT  ****************************************/}
        <div className="col-md-7 shadow border border-1 rounded-2 p-2">
          {/* POST COMPONENT **********************************************************/}
          <div className="m-3 p-2 border border-1 rounded-2">
            <h4><DataFetching/></h4>
            <p><DataFetching/></p>
          </div>
          {/* ANOTHER POST COMPONENT **************************************************/}
          <div className="m-3 p-2 border border-1 rounded-2">
            <h4><DataFetching/></h4>
            <p><DataFetching/></p>
          </div>
          <Link className="m-3">See more</Link>
        </div>
        {/* END OF RIGHT PANEL - NEWS FEED COMPONENT **********************************/}
      </div>
    </div>


  );
}

export default Home;