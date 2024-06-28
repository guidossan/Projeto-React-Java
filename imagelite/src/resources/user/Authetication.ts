import{ AccessToken, Credentials, User, UserSectionToken } from './Users'

class AuthService{
  
    baseURL: string="http://localhost:8080/users";
    static AUTH_PARAM: string = "_auth";

    async autheticate(credentials: Credentials) : Promise<AccessToken> {
        const response = await fetch(this.baseURL + "/auth", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        });
        if (response.status == 400){
            throw new Error("Usuário ou senha incorretos")
        }
        return await response.json();
    }
    async save(user: User):Promise<void>{
        const response = await fetch(this.baseURL, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        });

        console.log(response);
        if (response.status == 409){
            throw new Error("Usuário já existe")
        }
       
    }
}

export const useAuth = () => new AuthService();