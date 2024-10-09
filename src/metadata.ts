export class Metadata {
    semver: string;
    vm: string;
    agent: string;

    constructor(semver, vm, agent) {
        this.semver = semver;
        this.vm = vm;
        this.agent = agent;
    }
}