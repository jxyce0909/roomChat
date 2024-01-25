import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

import ClickAwayListener from 'react-click-away-listener';

export const ColorPick = (props: any) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <ClickAwayListener onClickAway={(event) => {setOpen(false);}}>
                <div className="picker">
                    <div
                        className="swatch"
                        style={{ backgroundColor: props.color }}
                        onClick={() => setOpen(!open)}
                    />

                    {open && open && (
                        <div className="popover">
                            <HexColorPicker color={props.color} onChange={props.onChange} />
                        </div>
                    )}
                </div>
            </ClickAwayListener>
        </div>
    );
};
