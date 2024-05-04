import { PopupPosition } from './types';
export declare const POSITION_TYPES: PopupPosition[];
declare type CordsType = {
    top: number;
    left: number;
    transform: string;
    arrowLeft: string;
    arrowTop: string;
};
export declare const getTooltipBoundary: (keepTooltipInside: string | Boolean) => {
    top: number;
    left: number;
    width: number;
    height: number;
};
declare const calculatePosition: (triggerBounding: DOMRect, ContentBounding: DOMRect, position: PopupPosition | PopupPosition[], arrow: boolean, { offsetX, offsetY }: {
    offsetX: number;
    offsetY: number;
}, keepTooltipInside: string | boolean) => CordsType;
export default calculatePosition;
