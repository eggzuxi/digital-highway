import { useCallback, useEffect, useState } from "react";
import Reader from "../../../components/DeviceGuide/Kiosc/Reader";
import { useNavigate } from "react-router-dom";
import "./UseGC.css";
import axios from 'axios'

const UseGC = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState({orders:[]})

  const onButtonClick = useCallback(() => {
    navigate("/DeviceGuide/Kiosc/InputBarcode_10");
  }, [navigate]);

  const onButton1Click = useCallback(async() => {
    try{
      await axios.delete('http://localhost:4000/devices/kiosc_03',{data:{userID:"test"}});
      navigate("/DeviceGuide/Kiosc/Finish_08");
    }catch(err){
      console.log("주문실패함",err)
    }
  }, [navigate]);

  useEffect(()=>{
    async function getOrder(){
      try{
        const response = await axios.get('http://localhost:4000/devices/kiosc_03',{params:{userID:"test"}})
        setOrder(response.data);
      }catch(error){
        console.log(error.message)
      }
    }
    getOrder()
  },[])
  const additionalPayment = order.totalPrice - 4900;
  const remainingAmount = additionalPayment < 0 ? -additionalPayment : 0;
  return (
    <div className="kiosc_usegc-11">
      <Reader />
      <main className="kiosc_monitor11">
        <p className="kiosc_p13">
          <span className="kiosc_span7">모바일 상품권을</span>
          <span className="kiosc_span7">사용하시겠습니까?</span>
        </p>
        <img
          className="kiosc_material-symbolsphone-iphone-icon1"
          alt=""
          src="/DeviceGuide/Kiosc/barcode2.png"
        />
        <div className="kiosc_parent">
          <p className="kiosc_p14">이용가능금액</p>
          <p className="kiosc_p15">￦4,900</p>
          <p className="kiosc_p14">쿠폰 종류</p>
          <p className="kiosc_p15">교환권</p>
        </div>
        <img className="kiosc_line2" src="/DeviceGuide/Kiosc/line2.png"/>
        {order.orders && (
          <div className="kiosc_group">
            <p className="kiosc_p14">주문금액</p>
            <p className="kiosc_p15">￦{order.totalPrice}</p>
            {additionalPayment > 0 && (
              <>
                <p className="kiosc_p14">추가결제금액</p>
                <p className="kiosc_p15">￦{additionalPayment}</p>
              </>
            )}
            {additionalPayment < 0 && (
              <>
                <p className="kiosc_p14">남은금액</p>
                <p className="kiosc_p15">￦{remainingAmount}</p>
              </>
            )}
          </div>
        )}
        <button className="kiosc_button8" onClick={onButtonClick}>
          <img className="kiosc_child7" alt="" src="/DeviceGuide/Kiosc/rectangle-23.svg" />
          <div className="kiosc_div11">이전</div>
        </button>
        <button className="kiosc_button9" onClick={onButton1Click}>
          <img className="kiosc_child7" alt="" src="/DeviceGuide/Kiosc/rectangle-23.svg" />
          <div className="kiosc_div12">사용하기</div>
        </button>
      </main>
    </div>
  );
  
};

export default UseGC;