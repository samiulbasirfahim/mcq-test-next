import apiRoutes from "./apiRoutes";

export default function login(user: any, setIsLoading: any, router: any) {
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
    }).then(res => res.json()).then(data => {
        setIsLoading(false)
        if (data.status) {
            const path: string = router.pathname as string
            if (path.includes("/admin")) {
                console.log(data)
                if (data?.user?.role !== "admin") {
                    router.push("/")
                }
            }
            if (router.pathname === "/login" || router.pathname === "/register") {
                router.push("/")
            }
        } else {
            localStorage.removeItem("user")
            router.push('/login')
        }
    })

}