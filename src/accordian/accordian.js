import "./styles.css";
import { useState } from "react";

const Accordian = () => {
    const [show, setShow] = useState(false);

    const handleOnClick = () => {
        setShow(!show);
    };

    return (
        <div className="accordian">
            <div className="accordian__header">
                <h2>Accordian</h2>
                <span
                    className={`chevron-${show ? "up" : "down"}`}
                    onClick={handleOnClick}
                >
                    &#10095;
                </span>
            </div>
            {show ? (
                <div className="accordian__body">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Veniam ratione alias ducimus dolorum eveniet
                        accusantium officia, modi dolor qui sapiente reiciendis
                        earum laborum deleniti itaque sed tempora iste velit
                        nesciunt.
                    </p>
                </div>
            ) : null}
        </div>
    );
};

export default Accordian;
