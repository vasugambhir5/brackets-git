declare const brackets: {
    platform: string;
    getModule: (path: string) => any;
};

interface JQuery {
    tab: (cmd: string) => JQuery;
}
