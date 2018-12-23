import * as React from 'react';

export interface ISelectInputPara {

}

interface ISelectInputState {
    data: dataList;
}

export class SelectInput extends React.Component<ISelectInputPara, ISelectInputState> {
    constructor(props: ISelectInputPara) {
        super(props);
        this.state = {
            data: []
        }
    }

    render(){
        return <div>

        </div>
    }

}