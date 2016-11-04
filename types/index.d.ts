declare module 'nodegarden' {
    class nodegarden {
        constructor(container: HTMLElement);
        render(start: boolean): void;
        resize(): void;
        start(): void;
        stop(): void;
        toggleNightMode(): void;
    }
    export default nodegarden;
}
