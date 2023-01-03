import apiRoutes from "./apiRoutes";

export default async function login(user: any, setIsLoading: any, router: any, setIsAdmin: any) {
    if (!user) {
        setIsLoading(false)
        return router.push("/login")
    }
    fetch(apiRoutes.loginUser, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            password: user.password,
            email: user.email,
            isHashed: true

        }),
    }).then(res => res.json()).then(function (data) {
        if (data.status) {
            const path: string = router.pathname as string
            if (path.includes("/admin")) {
                if (data?.user?.role !== "admin") {
                    router.push("/")
                }
            }
            if (router.pathname === "/login" || router.pathname === "/register") {
                router.push("/")
            }
            if (data?.user?.role === "admin") {
                setIsAdmin(true)
            } else {
                setIsAdmin(false)
            }
        } else {
            localStorage.removeItem("user")
            router.push('/login')
        }
        setIsLoading(false)
    })

}