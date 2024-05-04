import { RefObject, useLayoutEffect } from 'react';
export declare const useOnEscape: (handler: (event: KeyboardEvent) => void, active?: boolean) => void;
export declare const useRepositionOnResize: (handler: () => void, active?: boolean) => void;
export declare const useOnClickOutside: (ref: RefObject<HTMLElement> | RefObject<HTMLElement>[], handler: (event: TouchEvent | MouseEvent) => void, active?: boolean) => void;
export declare const useTabbing: (contentRef: RefObject<HTMLElement>, active?: boolean) => void;
export declare const useIsomorphicLayoutEffect: typeof useLayoutEffect;
