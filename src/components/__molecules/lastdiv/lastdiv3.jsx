import Text from "../../__atoms/text/text";
import Button from "../../__atoms/button/button";

function LastDiv3() {
  return (
    <>
      <div className="last_div">
        <div className="price">
          <Text class="last_txt" text="$13.90" />
          <Text class="sale_txt" text="$18.90" />
        </div>
        <Button />
      </div>
    </>
  );
}

export default LastDiv3;
