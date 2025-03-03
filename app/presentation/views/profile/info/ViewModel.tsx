import {deleteUserUseCase} from "../../../../domain/useCases/userLocal/DeleteUser";
import {useUserLocalStorage} from "../../../hooks/useUserLocalStorage";

const ProfileViewModel = () => {
    const {user} = useUserLocalStorage()

    const deleteSession = async () => {
        await deleteUserUseCase()
    }


    return {
        user,
        deleteSession
    }

}

export default {ProfileViewModel};