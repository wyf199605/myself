import * as React from 'react';

export interface IMaskLayer{
    isShow?: boolean; // 是否显示，默认false
    onClick?: Function; // 点击事件
    zIndex?: number;
    isAnimated?: boolean; // 是否需要动画，默认true；
}

export class MaskLayer extends React.Component<IMaskLayer>{
    constructor(props: IMaskLayer){
        super(props);
    }

    static defaultProps = {
        isShow: false,
        isAnimated: true,
    };

    clickHandler(e: React.MouseEvent){
        e.preventDefault();
        this.props.onClick && this.props.onClick();
    }

    render(){
        let {
            isShow,
            isAnimated,
            zIndex
        } = this.props;

        return <div style={{zIndex: zIndex}} className={
            [
                'mask-layer-wrapper',
                isShow ? null : 'hide',
                isAnimated ? 'animation' : null,
            ].join(' ')
        } onClick={(e) => {
            this.clickHandler(e);
        }} />
    }
}