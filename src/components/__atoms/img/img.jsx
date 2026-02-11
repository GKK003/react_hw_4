function Img(props) {
  return (
    <>
      <div className="img_div">
        <img className="img" src={props.img} />
      </div>
    </>
  );
}

export default Img;
