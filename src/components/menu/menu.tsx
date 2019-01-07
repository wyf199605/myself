import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {IMenuItem, MenuItem} from "./menuItem";

export interface IMenu {
    isHorizontal?: boolean; // 是否是水平展示的菜单，默认false
    verticalCollapsed?: boolean; // 垂直展示时是否自动收缩，默认false
    disabled?: boolean; // 是否不可点击，默认false
    onClick?: (name: string, content: any) => void;
}

export class Menu extends React.Component<IMenu> {
    constructor(props: IMenu){
        super(props);

    }

    static item: typeof MenuItem = MenuItem;

    render(){
        let {
            disabled,
            children
        } = this.props;

        return <div className={["menu-wrapper", disabled ? 'disabled' : null].join(' ')}>
            <MenuItem name="basic" __isRoot={true}>
                {children}
            </MenuItem>
        </div>
    }
}