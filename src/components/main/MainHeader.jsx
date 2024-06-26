import { useNavigate } from "react-router-dom";
import "./MainHeader.css";
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
  },[]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onHeaderMyinfoButtonClick = useCallback(() => {
    navigate("/mypagemyaccount");
  }, [navigate]);

  const handleBackClick = () => {
    if (location.pathname === '/home') {
        // 특정 페이지로 이동
        navigate('/');
    } else {
        // 이전 페이지로 이동
        navigate(-1);
    }
  }

  return (
    <header className="mainpage-appguideheader">
      {user&&(<button
        className="mainpage-headermyinfobutton1"
        onClick={onHeaderMyinfoButtonClick}
      >
        <div className="mainpage-div57">내 정보</div>
      </button>)}
      <div className="mainpage-headertitle2" onClick={onLogoContainerClick}>
        {/* <img
          className="mainpage-headertitleimage-icon4"
          alt=""
          src="main/image-1@2x.png"
        /> */}
        <img
          className="mainpage-headertitleimage-icon4"
          alt=""
          src="main/snail_logo_black.png"
        />
        <div className="mainpage-div58">디지털지름길</div>
      </div>
      <button className="mainpage-headerbackbutton5" onClick={handleBackClick}>
        <div className="mainpage-div59">뒤로가기</div>
      </button>
    </header>
  )
}

export default MainHeader;