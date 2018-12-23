import * as React from 'react';

export interface IFormComPara{
    defaultValue?: any;
    onSet?: (value: any) => void;
}

export interface IFormComState {
    value: any;
}

export abstract class FormCom<T extends IFormComPara, U extends IFormComState>
    extends React.Component<T, U>{

}