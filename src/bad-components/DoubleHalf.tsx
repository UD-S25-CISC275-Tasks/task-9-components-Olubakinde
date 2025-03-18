import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 *
 * state cannot be defined outside of where it is being used thats whhy we defind it in here.
 *
 * we can delete that file (DoubleHalfState.tsx).
 *
 */

export function DoubleHalf(): React.JSX.Element {
    //define state here because state canno be called outside of a component.
    const [dhValue, setDhValue] = useState<number>(10);

    //moved the function inside because these are serving as mini function that work with sate defined above so there is no point in having having outsoide as seperate function as that is not right.

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button
                onClick={() => {
                    setDhValue(2 * dhValue);
                }}
            >
                Double
            </Button>

            <Button
                onClick={() => {
                    setDhValue(0.5 * dhValue);
                }}
            >
                Halve
            </Button>
        </div>
    );
}
