import React, { useEffect, useState } from "react";
import Fighter from "../Fighter/Fighter";
import FighterSlider from "../FighterSlider/FighterSlider";
import styles from "./FighterSelector.module.scss";

function FighterSelector() {
    const [fighter, setFighter] = useState("ken");
    const [fighterSelectionHistory, setFighterSelectionHistory] = useState([]);

    const onFighterChange = fighter => {
        setFighter(fighter);
    }

    useEffect(() => {
            setFighterSelectionHistory([
                ...fighterSelectionHistory,
                {
                    fighter,
                    time: (new Date()).toLocaleTimeString()
                }
            ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fighter])

    return (
        <div className={styles.FighterSelector}>
            <div className={styles.FighterName}>{fighter}</div>
            <FighterSlider
                fighter={fighter}
                onFighterChange={onFighterChange}>
                <Fighter fighter={fighter} />
            </FighterSlider>
            <div className={styles.HistoryLog}>
                <span>History:</span>
                <div>
                    {fighterSelectionHistory.map(({ fighter, time }) => (
                        <p key={fighter+time}>{`[${time}] ${fighter} was selected.`}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FighterSelector;