import React from "react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  // navegate関数を取得
  const navigate = useNavigate();
  // トップページに移動
  const handleClick = () => navigate(-1);
  return (
    <>
      <div>AboutPage</div>
      <button type="button" onClick={handleClick}>
        トップへ移動
      </button>
    </>
  );
};

export default AboutPage;
