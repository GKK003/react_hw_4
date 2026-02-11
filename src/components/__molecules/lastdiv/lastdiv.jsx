import Text from "../../__atoms/text/text";
import Button from "../../__atoms/button/button";

function LastDiv() {
  return (
    <>
      <div className="last_div">
        <div className="price">
          <Text class="last_txt" text="$23.90" />
          <Text class="sale_txt" text="$29.90" />
        </div>
        <Button />
      </div>
    </>
  );
}

export default LastDiv;
