import { useSession_unstable as useSession } from "@faststore/core/experimental";

export const NavBarButton = () => {
    const { ...session } = useSession()

    const getSessionClick = () => {
        alert('Session on Console')

        console.log('>> Session', session)
    }

    return (
        <button onClick={getSessionClick}>
            Get Session
        </button>
    )
}