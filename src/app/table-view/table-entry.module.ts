export class TableEntry {
    constructor(public date: Date, public item: string, public amount: number, private currency = '€') {}
}
