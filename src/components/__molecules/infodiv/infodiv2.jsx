import Info from "../../__atoms/info/info";

function InfoDiv2(props) {
  return (
    <>
      <div className="info_div">
        <Info txt="270 Cal" />
        <Info txt="P/F/C: 18/4/41" />
        <Info txt="42.4 °C" />
      </div>
    </>
  );
}

export default InfoDiv2;
