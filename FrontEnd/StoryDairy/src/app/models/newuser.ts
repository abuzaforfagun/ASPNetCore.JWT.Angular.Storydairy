export class NewUser {
    name: string;
    userId: string;
    password: string;
    confirmPassword: string;

    checkInputs(): boolean {
        if (this.name === undefined || this.userId === undefined || this.password === undefined) {
            return false;
        }
        return true;
    }

    checkPassword(): boolean {
        if (this.password !== this.confirmPassword) {
            return false;
        }
        return true;
    }
}
