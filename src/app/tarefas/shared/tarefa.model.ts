export class Tarefa {
    // the constructor defines also the attributes all at once, with no need to declare them explicty
    constructor(
        public id?: number, // the ? means that this attibute is optional
        public nome?: string,
        public concluida?: boolean) { }
}
