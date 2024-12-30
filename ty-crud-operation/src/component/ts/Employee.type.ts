export interface IEmployee {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
}

export const dummyEmplyeeList: IEmployee[] = []

export enum PageEnum {
    list, add, edit
}