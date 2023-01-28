export default class Expense {
    constructor(
        public id: string,
        public title: string,
        public amount: number,
        public date: Date
    ){}
}