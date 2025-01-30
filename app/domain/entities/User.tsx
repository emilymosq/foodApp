export interface UserInterface {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
//  repeatPassword: string;
}

// interface Credentials {
//    email: string;      --->      Esto es lo mismo que se hace con el
//    password: string;             "export type" y "Pick".
// }
// export type UserLoginOptionalInterface = Omit<UserInterface, "id" | "firstName" | "lastName" | "phone" | "repeatPassword">
export type UserLoginInterface = Pick<UserInterface, "email" | "password">

export interface UserLogin extends UserInterface {
    token: string;
}