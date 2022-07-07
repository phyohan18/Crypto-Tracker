import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export function Sparkline(props){
    return (
        <Sparklines data={props.data} limit={168} width={162} height={50} margin={3}>
            <SparklinesLine color="#14B8A6" />
        </Sparklines>
    )
}

export default React.memo(Sparkline)