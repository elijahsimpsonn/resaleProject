import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import { Link, useMutation, Routes } from "blitz"
import logout from "app/auth/mutations/logout"
import styles from "./UserInfo.module.css"

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <>
        <button
          className={styles.logout}
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </button>
        <div>
          User id: <code>{currentUser.id}</code>
          <br />
          User role: <code>{currentUser.role}</code>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Link href={Routes.SignupPage()}>
          <button className={styles.signup}>
            <strong>Sign Up</strong>
          </button>
        </Link>
        <Link href={Routes.LoginPage()}>
          <button className={styles.login}>
            <strong>Login</strong>
          </button>
        </Link>
      </>
    )
  }
}

export default UserInfo
