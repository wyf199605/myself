import * as React from 'react';

export interface ISpinner {
    delay?: number;
    tip?: number;
}

export class Spinner extends React.Component<ISpinner>{

    render(){
        return <div className="spinner-wrapper">
            <span className="spinning">
                <i/>
                <i/>
                <i/>
                <i/>
            </span>
        </div>
    }
}