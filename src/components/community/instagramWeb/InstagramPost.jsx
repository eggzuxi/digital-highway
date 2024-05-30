import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./InstagramPost.css";

const InstagramPost = ({ className = "", imageSrc, postContent }) => {
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/community/instagramWeb/postpage");
  }, [navigate]);

  return (
    <div className={`instagrampost ${className}`}>
      <img
        className="instagrampost-child"
        alt="Post"
        src={imageSrc}
      />
      <div className="heartandcommenticon">
        <button className="phheart-parent" id="HeartButton">
          <img
            className="phheart-icon2"
            alt=""
            src="/community/instagramWeb/phheart.svg"
          />
          <div className="group-child" />
        </button>
        <button className="iconamooncomment-light-parent" id="CommentButton">
          <img
            className="iconamooncomment-light1"
            alt=""
            src="/community/instagramWeb/iconamooncommentlight.svg"
          />
          <div className="group-child" />
        </button>
        <div className="f7paperplane-parent">
          <img
            className="f7paperplane-icon1"
            alt=""
            src="/community/instagramWeb/f7paperplane.svg"
          />
          <div className="group-child" />
        </div>
      </div>
      <div className="likegroup">
        <div className="div6">좋아요</div>
        <div className="div7">999</div>
        <div className="div8">개</div>
      </div>
      <div className="digital-highway11">Digital_highway</div>
      <div className="orion-world1">{postContent}</div>
      <div className="div9" onClick={onTextClick}>
        댓글 24개 모두 보기
      </div>
      <input className="input2" placeholder="댓글 달기..." type="text" />
      <div className="instagrampost-item" />
      <div className="instagrampost-inner" />
      <div className="postidframe">
        <img
          className="postidframe-child"
          alt=""
          src="/community/instagramWeb/ellipse-2@2x.png"
        />
        <img
          className="iconamoonmenu-kebab-horizonta"
          alt=""
          src="/community/instagramWeb/iconamoonmenukebabhorizontal.svg"
        />
        <div className="frame2">
          <b className="digital-highway12">Digital_highway</b>
          <div className="div10">13시간</div>
        </div>
      </div>
    </div>
  );
};

InstagramPost.propTypes = {
  className: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  postContent: PropTypes.string.isRequired,
};

export default InstagramPost;