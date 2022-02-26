import React from 'react'
import { GetServerSideProps } from 'next'
import Layout from 'components/Layout'

const Blog: React.FC = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>ConnectMed US</h1>
        <main></main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const res = await fetch('/api/feed')
//   const feed = await res.json()
//   return {
//     props: { feed },
//   }
// }

export default Blog
