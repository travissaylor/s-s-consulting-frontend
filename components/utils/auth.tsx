import router from "next/router"
import Cookies from "js-cookie"
import cookie from "cookie"
import redirectTo from "./redirectTo"
import api from "./api"

export const isLoggedIn = (reqCookies = null) => {
    // if we don't have request cookies, get the cookie from client
    if (!reqCookies) {
        return !!Cookies.get("ticket_management_is_user_logged_in")
    }

    // otherwise get cookie from server
    return !!cookie.parse(reqCookies).ticket_management_is_user_logged_in
}

export const logIn = () => {
    Cookies.set("ticket_management_is_user_logged_in", true, {
        expires: 86400,
        sameSite: "lax",
    })

    router.push("/admin")
}

export const fullLogin = async (inputs) => {
    const promise = new Promise(async (resolve, reject) => {
        try {
            await api().get("/sanctum/csrf-cookie")
            const response = await api().post("/login", inputs)
            if (response.data.error) {
                reject(response.data.error);
            }
            
            logIn()
            resolve(response);
        } catch (error) {
            reject(error);
        }
    })

    return promise;
}

export const logOut = () => {
    if (typeof window !== "undefined") {
        // remove logged in user's cookie and redirect to login page
        Cookies.remove("ticket_management_is_user_logged_in", {
            expires: 86400,
            sameSite: "lax",
        })

        router.push("/login")
    }
}

export const fullLogout = async () => {
    const promise = new Promise(async (resolve, reject) => {
        try {
            const res = await api().post("/logout")
            logOut()
            resolve(res);
        } catch (error) {
            reject(error);
        }
    })

    return promise;
}

export const requireAuthentication = (gssp) => {
    return async (context) => {
        const isUserLoggedIn = isLoggedIn(context?.req?.headers?.cookie || '')

        if (! isUserLoggedIn) {
            redirectTo('/login', context)
            return;
        }

        return await gssp(context); // Continue on to call `getServerSideProps` logic
    }
}
