import { ReactNode } from 'react';
declare type Props = {
    children: ReactNode;
    close?: () => void;
    title?: string;
};
export declare const Content: ({ children, close, title, }: Props) => JSX.Element;
export {};
