import { useNavigate } from "react-router-dom";
import "./MainShortHeader.css";
import { useCallback, useState, useEffect } from "react";
import axios from 'axios'

const MainHeader = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(()=>{
    async function getUsername(){
      try{
        const response = await axios.get('http://localhost:4000/myPage',{withCredentials:true});
        setUser(response.data);
      }catch(error){
        setUser(null)
      }
    }
    getUsername();
  },[user]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onHeaderMyinfoButtonClick = useCallback(() => {
    navigate("/mypagemyaccount");
  }, [navigate]);

  return (
    <header className="main-appguideheader">
      {user&&(<button
        className="main-headermyinfobutton1"
        onClick={onHeaderMyinfoButtonClick}
      >
        <div className="main-div57">내 정보</div>
      </button>)}
      <div className="main-headertitle2" onClick={onLogoContainerClick}>
        <img
          className="main-headertitleimage-icon4"
          alt=""
          src="main/snail_logo_black.png"
        />
        <div className="main-div58">디지털지름길</div>
      </div>
      <button className="main-headerbackbutton5" onClick={() => {navigate(-1);}}>
        <div className="main-div59">뒤로가기</div>
      </button>
    </header>
  )
}

export default MainHeader;