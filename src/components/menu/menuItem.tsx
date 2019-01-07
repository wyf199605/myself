import * as React from 'react';
import {Menu} from "./menu";

export interface IMenuItem {
    disabled?: boolean;
    title?: string;
    name: string;
    content?: any;
    __onClick?: (name: string, content: any) => void;
    __isRoot?: boolean;
    __isExpand?: boolean;
    __onSelect: (name: string, isOpen: boolean) => void;
}

export interface IMenuItemState {
    expandChildren: string[],
    isOpen: boolean;
    isLeaf: boolean;
}

export class MenuItem extends React.Component<IMenuItem, IMenuItemState> {
    constructor(props: IMenuItem) {
        super(props);
        this.state = {
            expandChildren: [],
            isOpen: props.__isExpand,
            isLeaf: !!this.props.children
        }
    }

    protected menuItems: React.ReactElement<MenuItem>[] = [];

    clickHandler(e: React.MouseEvent) {
        e.stopPropagation();
        let {
            __onClick: onClick,
            name,
            content
        } = this.props;
        onClick && onClick(name, content);
    }

    openChangeHandler() {
        this.setState((prevState) => {
            return {
                isOpen: !prevState.isOpen
            }
        });
        let onSelect = this.props.__onSelect;
        onSelect && onSelect(this.props.name, this.state.isOpen);
    }

    static renderMenuItems(children: React.ReactNode, props?: Partial<IMenuItem>, openName: string[] = []) {
        return React.Children.map(children, child => {
            if (React.isValidElement<any>(child)) {
                let prevProp = child.props;
                return React.cloneElement(child, Object.assign({
                    __isRoot: false,
                    __isExpand: ~openName.indexOf(prevProp.name)
                }, props));
            } else {
                return null;
            }
        });
    }

    render() {
        let {
            title,
            disabled,
            children,
            __onClick,
            __isRoot,
        } = this.props;
        let {
            isOpen,
            expandChildren,
            isLeaf
        } = this.state;

        if (isLeaf) {
            this.menuItems = MenuItem.renderMenuItems(children, {
                __onClick,
                __onSelect: () => {

                }
            });
        }

        return __isRoot
            ?
            this.menuItems
            :
            <div onClick={(e) => {
                this.clickHandler(e);
            }} className={["menu-item-wrapper", disabled ? 'disabled' : null].join(' ')}>
                <div className="menu-item-title" onClick={() => {
                    isLeaf && this.openChangeHandler();
                }}>{title}</div>
                {isLeaf ? <div className={['menu-item-children', isOpen ? null : 'hide'].join(' ')}>
                    {this.menuItems}
                </div> : null}
            </div>
    }
}