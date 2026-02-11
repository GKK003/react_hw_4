import Text from "../../__atoms/text/text";
import Button from "../../__atoms/button/button";

function LastDiv2() {
  return (
    <>
      <div className="last_div">
        <div className="price">
          <Text class="last_txt" text="$17.90" />
          <Text class="sale_txt" text="$22.90" />
        </div>
        <Button />
      </div>
    </>
  );
}

export default LastDiv2;
