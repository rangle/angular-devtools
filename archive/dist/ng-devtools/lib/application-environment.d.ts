export interface Process {
    env: Env;
}
interface Env {
    LATEST_SHA: string;
}
export interface Environment {
    production: boolean;
    process: Process;
}
export declare abstract class ApplicationEnvironment {
    abstract get environment(): Environment;
}
export {};
