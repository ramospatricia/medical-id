import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data } = useSession()

  return <div>Access Token: <pre>{JSON.stringify(data, null, 2 )}</pre></div>
}