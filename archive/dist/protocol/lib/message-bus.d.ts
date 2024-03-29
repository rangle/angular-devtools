export declare type Parameters<F> = F extends (...args: infer T) => any ? T : never;
export declare abstract class MessageBus<T> {
    abstract on<E extends keyof T>(topic: E, cb: T[E]): void;
    abstract once<E extends keyof T>(topic: E, cb: T[E]): void;
    abstract emit<E extends keyof T>(topic: E, args?: Parameters<T[E]>): boolean;
    abstract destroy(): void;
}
