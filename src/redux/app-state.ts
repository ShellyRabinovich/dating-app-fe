
import IRegister from "../models/IRegister";
import ISuccessfulLoginData from "../models/ISuccessfulLoginData";

export class Appstate{
    public logInData:ISuccessfulLoginData | undefined;
    public registerData:IRegister | undefined;
}