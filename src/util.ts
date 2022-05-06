/**
 * Copyright (c) 2015-present Houfeng
 * @homepage https://github.com/Houfeng/mota
 * @author Houfeng <houzhanfeng@gmail.com>
 */
import { Component, ReactNode } from "react";

export const inBrowser = () => typeof document !== "undefined";
export const hasRequire = () => typeof require === "function";

export type AnyFunction = (...args: any[]) => any;

export type ComponentClass = {
  new (...args: any[]): Component<any, any>;
  displayName?: string;
};

export type FunctionComponent = ((...args: any[]) => ReactNode) & {
  displayName?: string;
};

export type ComponentType = ComponentClass | FunctionComponent;

export function isClassComponent(com: ComponentType): com is ComponentClass {
  return !!com.prototype.render;
}

export const ReactDOMUtil: any = (() => {
  if (!inBrowser) return {};
  if (!hasRequire()) return (window as any).ReactDOM || {};
  try {
    const reactDom = require("react-dom") || {};
    return reactDom || reactDom.default;
  } catch {
    return {};
  }
})();
