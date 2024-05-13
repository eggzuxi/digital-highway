import { memo } from "react";
import "./Frame4.css";

const Frame4 = memo(({phoneNumber}) => {
  return (
    <div className="certifybyphone-parent">
      <div className="certifybyphone">
        <p className="blank-line">&nbsp;</p>
        <p className="blank-line">&nbsp;</p>
        <p className="blank-line">&nbsp;</p>
        <p className="blank-line">{phoneNumber}</p>
        <p className="blank-line">메시지에서 가져옴</p>
        <p className="blank-line">인증번호 : 1234</p>
      </div>
    </div>
  );
});

export default Frame4;