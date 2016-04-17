
declare function extend<T extends Object>(deep: boolean, target: T, ...objects: Object[]): T;
declare function extend<T extends Object>(target: T, ...objects: Object[]): T;

export = extend;
