import Router from "next/router"

export default function redirectTo(destination: Location, requestData = { res: null, status: null}) {
    const res = requestData.res;
    const status = requestData.status;

    if (res) {
        res.writeHead(status || 302, { Location: destination })
        res.end()
    } else {
        if (destination[0] === "/" && destination[1] !== "/") {
            Router.push(destination)
        } else {
            window.location = destination
        }
    }
}
