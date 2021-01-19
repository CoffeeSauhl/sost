export class User {

    private _id: number;
    private _username: string;
    private _email: string;
    private _token: string;

    constructor() {}

    public get id(): number {
        return this._id;
    }

    public get username(): string {
        return this._username;
    }

    public get email(): string {
        return this._email;
    }

    public get token(): string {
        return this._token;
    }
}
