import { Button } from "@faststore/ui";
import { SlideOver } from "@faststore/ui";
import { useState } from "react";

import styles from "./NewProductDetails.module.scss";

export function AwesomeButton() {
    const [open, setOpen] = useState(false);

    const toggleSlider = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <div>
            <SlideOver
                overlayProps={{className:styles.slide}}
                size="partial"
                direction="rightSide"
                isOpen={open}
                fade="in"
                children={
                    <img
                        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExang0cWt5MHdjZTFhamZ3b2NiNTNlczI1cmYzbnJqcXl4eDh4em4zbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9fuvOqZ8tbZOU/giphy-downsized-large.gif"
                        alt="Dog spinning"
                    />
                }
                onDismiss={toggleSlider}
            />
            <Button variant="primary" onClick={toggleSlider}>
                Click me!
            </Button>
        </div>
    );
}