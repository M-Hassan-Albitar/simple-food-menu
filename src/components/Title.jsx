import { useEffect, useState } from "react";
import menu from "../data";
import Item from "./Item";

const Title = () => {
  const [menuItems, setMenuItems] = useState(menu);

  const handleAll = () => {
    setMenuItems(menu);
  };

  const handleBreakFast = () => {
    const breakFast = menu.filter((item) => item.category == "breakfast");
    // console.log(breakFast);
    setMenuItems(breakFast);
  };

  const handleLunch = () => {
    const lunch = menu.filter((item) => item.category == "lunch");
    // console.log(lunch);
    setMenuItems(lunch);
  };

  const handleShakes = () => {
    const shakes = menu.filter((item) => item.category == "shakes");
    // console.log(shakes);
    setMenuItems(shakes);
  };

  return (
    <>
      <section className="menu">
        <div className="btn-container ">
          <button onClick={handleAll} className="btn">
            all
          </button>
          <button onClick={handleBreakFast} className="btn">
            breakfast
          </button>
          <button onClick={handleLunch} className="btn">
            lunch
          </button>
          <button onClick={handleShakes} className="btn">
            shakes
          </button>
        </div>
        <article className="section-center">
          {menuItems.map((item) => {
            return <Item key={item.id} {...item} itemImg={item.img} />;
          })}
        </article>
      </section>
    </>
  );
};

export default Title;
