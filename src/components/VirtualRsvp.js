import React, { useState } from 'react'
import Loader from 'react-loader-spinner'
import { ThanksRsvp } from './ThanksRsvp'

export const VirtualRsvpForm = ({ toggleRunConfetti }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [congrats, setCongrats] = useState(false)

  const confirm = async () => {
    try {
      setLoading(true)
      const result = await fetch(
        `https://nextjs-orcin-nine.vercel.app/api/virtual-rsvp`,
        {
          method: 'POST',
          body: JSON.stringify({ email, name }),
        }
      )

      if (result.status !== 200) {
        throw new Error('error confirming')
      }
      setLoading(false)
      toggleRunConfetti()
      setCongrats(true)
      //congrats page
    } catch (error) {
      setLoading(false)
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div>
      {congrats === true ? (
        <ThanksRsvp />
      ) : (
        <>
          <h2 className="major">Virtual RSVP</h2>
          <p>
            We thank you for all of your love and support during these uncertain
            times. In light of everyone’s health, we will be limiting our guest
            attendance to an intimate few as advised by city regulations. We
            invite you to celebrate in our joy as we live-stream our ceremony.
            Please enter your name and email below so we can send you important
            information to access the live stream. We look forward to
            (virtually) celebrating with you!
          </p>
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Loader
                type="TailSpin"
                color="#FFFFFF"
                height={100}
                width={100}
              />
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <input
                name="name"
                placeholder="First and Last Name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <input
                name="email"
                placeholder="Email Address"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button disabled={!email || !name} onClick={confirm}>
                Complete RSVP
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
