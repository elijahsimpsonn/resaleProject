import { Suspense } from "react"
import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import UserInfo from "app/users/Components/UserInfo/UserInfo"
import styles from "./home.module.css"

const Home: BlitzPage = () => {
  return (
    <div className="container">
      <main>
        <div className={styles.logo}>
          <h1>Resale</h1>
        </div>
        <div className={styles.button}>
          <Suspense fallback="Loading...">
            <UserInfo />
          </Suspense>
        </div>
      </main>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
