export = nodegarden;
declare class nodegarden {
    constructor(container: HTMLElement);
    render(start: boolean): void;
    resize(): void;
    start(): void;
    stop(): void;
    toggleNightMode(): void;
}
