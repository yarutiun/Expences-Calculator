import style from "./BaseWidgets.module.css";
import { useSelector } from "react-redux";

const BaseWidgets = () => {
    const name = useSelector((state) => state.name);
    const income = useSelector((state) => state.income);
    return (
        <main>
            <section>
                <div className={style.upLeft}>{name.name}</div>
                <div className={style.upRight}>{income.income}</div>
            </section>
            <section>
                <div className={style.downLeft}>B</div>
                <div className={style.downRight}>B</div>
            </section>
        </main>
    );
  };

export default BaseWidgets;
