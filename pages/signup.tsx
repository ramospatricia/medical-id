import React, { useState } from 'react'
import Router from 'next/router'
import Layout from 'components/Layout'

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [insuranceNumber, setInsuranceNumber] = useState('')
  const [insurance, setInsurance] = useState('')
  const [gender, setGender] = useState('')
  const [yubikey, setYubikey] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const body = {
        email,
        firstName,
        lastName,
        address,
        insuranceNumber: +insuranceNumber,
        insuranceId: +insurance,
        genderId: +gender,
        yubikey
      }
      await fetch(`/api/user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
    } catch (error) {
      console.error(error)
    }
  }

  const enableSubmit =
    email !== '' &&
    firstName !== '' &&
    lastName !== '' &&
    address !== '' &&
    insuranceNumber !== '' &&
    insurance !== '' &&
    gender !== ''

  return (
    <Layout>
      <div className="page">
        <form onSubmit={submitData}>
          <h1>Signup user</h1>
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            type="email"
            required
            value={email}
          />
          <input
            autoFocus
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            type="text"
            required
            value={firstName}
          />
          <input
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            type="text"
            required
            value={lastName}
          />
          <div>
            {/* <label htmlFor="gender">Gender</label> */}
            <select
              name="gender"
              id="gender"
              required
              defaultValue=""
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" disabled>
                Select gender
              </option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Other</option>
            </select>
          </div>

          <input
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            type="text"
            required
            value={address}
          />
          <div>
            {/* <label htmlFor="insurance">Insurance</label> */}
            <select
              name="insuranceId"
              id="insurance"
              required
              defaultValue=""
              onChange={(e) => setInsurance(e.target.value)}
            >
              <option value="" disabled>
                Select insurance
              </option>
              <option value="1">United Health</option>
              <option value="2">Anthem Inc</option>
              <option value="3">Aetna</option>
            </select>
          </div>
          <input
            onChange={(e) => setInsuranceNumber(e.target.value)}
            placeholder="Insurance Number"
            type="text"
            required
            value={insuranceNumber}
          />
          <input
            onChange={(e) => setYubikey(e.target.value)}
            placeholder="Insert Yubikey"
            type="text"
            required
            value={email}
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
