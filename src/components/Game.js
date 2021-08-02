import { useState } from "react";
import Grid from "./Grid/Grid";


const Game = props => {

    const gamePattern = [0, 3, 6, 8, 2];
    const [patternSize, setPatternSize] = useState(3);

    return(
        <div>
            <Grid pattern={gamePattern} size ={patternSize}></Grid>
        </div>
    )
}

export default Game;