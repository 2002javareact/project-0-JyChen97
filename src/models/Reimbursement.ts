export class Reimbursement {
    author: number
    amount: number
    dateSubmitted: number
    dateResolved: number
    description: string
    resolver: number
    status: number
    type: number

    constructor(
        author: number,
        amount: number,
        dateSubmitted: number,
        dateResolved: number,
        description: string,
        resolver: number,
        status: number,
        type: number,
    ){
        this.author = author
        this.amount = amount
        this.dateSubmitted = dateSubmitted
        this.dateResolved = dateResolved
        this.description = description
        this.resolver = resolver
        this.status = status
        this.type = type
    }
}