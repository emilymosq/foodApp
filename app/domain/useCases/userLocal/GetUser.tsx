import {UserLogin} from "../../entities/User";
import {UserLocalRepositoryImpl} from "../../../data/repositories/UserLocalRepository";


const {getUser} = new UserLocalRepositoryImpl();

export const getUserUseCase = async () => {
    return await getUser()
}
