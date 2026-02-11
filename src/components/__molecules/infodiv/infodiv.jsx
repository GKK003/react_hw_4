import Info from "../../__atoms/info/info";

function InfoDiv1(props) {
  return (
    <>
      <div className="info_div">
        <Info txt="265 Cal" />
        <Info txt="P/F/C: 12/10/31" />
        <Info txt="53.8 °C" />
      </div>
    </>
  );
}

export default InfoDiv1;
