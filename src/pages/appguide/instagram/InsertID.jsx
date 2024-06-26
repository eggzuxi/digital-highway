import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../../../components/appguide/instagram/Header";
import "./InsertID.css";

const InsertID = () => {
  const navigate = useNavigate();

  const onOpenmojireturnClick = useCallback(() => {
    navigate("/maincontents/insert-pw");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/maincontents/agreement");
  }, [navigate]);

  return (
    <div className="insta-insert-id">
      <Header1
        headerWidth="26.875rem"
        headerHeight="7.313rem"
        headerPosition="relative"
        headerTop="unset"
        headerLeft="unset"
        openmojireturnIconTop="1.375rem"
        openmojireturnIconLeft="1.313rem"
        openmojireturnIconWidth="4.5rem"
        openmojireturnIconHeight="4.5rem"
        instagramerTop="1.875rem"
        instagramerLeft="6.375rem"
        onOpenmojireturnClick={onOpenmojireturnClick}
      />
      <div className="insta-frame6">
        <div className="insta-div9">
          <p className="insta-p2">친구들이 회원님을 찾을 수 있도록</p>
          <p className="insta-p3">
            <span>이름 또는 별명</span>
            <span className="insta-span4">을 입력하세요.</span>
          </p>
        </div>
        <div className="insta-frame7">
          <div className="insta-input-box4">
            <div className="insta-div10">이름 또는 별명</div>
          </div>
          <div className="insta-input-box-frame" onClick={onFrameContainerClick}>
            <button className="insta-input-box5">
              <div className="insta-div11">다음</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsertID;
