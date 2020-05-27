import {authAPI} from "./api";

export const UserLogin = async (model) => authAPI.login(model)
