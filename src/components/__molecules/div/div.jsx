import Img from "../../__atoms/img/img";
import Pizza from "../../../assets/pizza.jpg";
import Tortelini from "../../../assets/tortelini.jpg";
import Cake from "../../../assets/cake.jpg";
import Heading from "../../__atoms/heading/heading";
import Oval from "../../__atoms/oval/oval";
import Fire from "../../../assets/fire.png";
import Wheat from "../../../assets/wheat.png";
import Leaf from "../../../assets/leaf.png";
import Text from "../../__atoms/text/text";
import InfoDiv1 from "../infodiv/infodiv";
import InfoDiv2 from "../infodiv/infodiv2";
import InfoDiv3 from "../infodiv/infodiv3";
import LastDiv from "../lastdiv/lastdiv";
import LastDiv2 from "../lastdiv/lastdiv2";
import LastDiv3 from "../lastdiv/lastdiv3";
function Div(props) {
  return (
    <>
      <div className="main_div">
        <Img img={Pizza} />
        <div className="second_line">
          <Heading heading="Pepperoni Pizza" />
          <div className="oval_div">
            <Oval classname="fire" image={Fire} />
            <Oval classname="wheat" image={Wheat} />
          </div>
        </div>
        <Text
          class="txt"
          text="Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust."
        />
        <InfoDiv1 />
        <LastDiv />
      </div>

      <div className="main_div">
        <Img img={Tortelini} />
        <div className="second_line">
          <Heading heading="Tortellini" />
          <div className="oval_div">
            <Oval classname="leaf" image={Leaf} />
            <Oval classname="fire" image={Fire} />
            <Oval classname="wheat" image={Wheat} />
          </div>
        </div>
        <Text
          class="txt"
          text="Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce."
        />
        <InfoDiv2 />
        <LastDiv2 />
      </div>

      <div className="main_div">
        <Img img={Cake} />
        <div className="second_line">
          <Heading heading="Strawberry Cake" />
          <Oval classname="wheat" image={Wheat} />
        </div>
        <Text
          class="txt"
          text="Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer."
        />
        <InfoDiv3 />
        <LastDiv3 />
      </div>
    </>
  );
}

export default Div;
