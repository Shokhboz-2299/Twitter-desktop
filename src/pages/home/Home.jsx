import logo from '../../assets/logo-twitter.png';
import "./home.css";
const Home = () => {
  return (
    <div className="container">
        <div className="row">
          <div className="col-3 home-right">
            <img src={logo} alt="twitter logo" width="40" />
          </div>
          <div className="col-6">
            <h2>Home</h2>
          </div>
          <div className="col-3">
            <input className="inputSearch" type="search" placeholder="Twitter search" />
          </div>
        </div>
    </div>
  )
}

export default Home;