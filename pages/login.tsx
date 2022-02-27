import React, { useState } from 'react'
import Router from 'next/router'
import Layout from 'components/Layout'

const apiUrl = process.env.NEXT_PUBLIC_DB_BASE_URL

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    const url = new URL('/api/user', apiUrl)
    try {
      const body = {
        email,
        password,
      }
      await fetch(url.href, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
    } catch (error) {
      console.error(error)
    }
  }

  const enableSubmit = email !== '' && password !== ''

  return (
    <Layout>
      <div className="page">
        <form onSubmit={submitData}>
          <h1>Login</h1>
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            type="email"
            required
            value={email}
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            required
            value={password}
          />
          <input disabled={!enableSubmit} type="submit" value="Signup" />
          <a className="back" href="#" onClick={() => Router.push('/')}>
            or Cancel
          </a>
        </form>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
        }

        input[type='text'],
        input[type='email'],
        input[type='password'],
        select {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type='submit'] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }

        .back {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  )
}

export default SignUp
