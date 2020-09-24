import React, { useState } from 'react'
import Loader from 'react-loader-spinner'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThanksRsvp } from './ThanksRsvp'

export const RsvpForm = ({ toggleRunConfetti }) => {
  const [email, setEmail] = useState('')
  const [lastName, setLastName] = useState('')
  const [loading, setLoading] = useState(false)
  const [congrats, setCongrats] = useState(false)
  const [people, setPeople] = useState([])

  const getCheckedPeople = () => {
    return people.filter(person => {
      return person.checked === true
    })
  }

  const confirmRSVP = async () => {
    try {
      setLoading(true)
      const checkedPeople = getCheckedPeople()
      if (!checkedPeople || checkedPeople.length === 0) {
        toast('Please select the people in your party.', {
          type: 'dark',
          closeButton: false,
        })
      } else {
        const result = await fetch(
          `https://nextjs-orcin-nine.vercel.app/api/rsvp`,
          {
            method: 'POST',
            body: JSON.stringify({ people: checkedPeople, email }),
          }
        )

        if (result.status !== 200) {
          throw new Error('error confirming')
        }
        setLoading(false)
        toggleRunConfetti()
        setCongrats(true)
        //congrats page
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const submit = async () => {
    try {
      setLoading(true)
      const result = await fetch(
        `https://nextjs-orcin-nine.vercel.app/api/rsvp?email=${email}&lastName=${lastName}`
      )
      const people = await result.json()
      setPeople(people)
      setLoading(false)
    } catch (error) {
      console.log(error)
      toast('Please double check your last name and email.', {
        type: 'dark',
        closeButton: false,
      })
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
      >
        <Loader type="TailSpin" color="#FFFFFF" height={100} width={100} />
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {congrats ? (
        <ThanksRsvp />
      ) : (
        <>
          {people.length === 0 ? (
            <>
              <br />
              <h3>
                If you're responding for you and a guest (or your family),
                you'll be able to RSVP for your entire group.
              </h3>
              <p>
                We are excited to be able to host our wedding even in the midst
                of the COVID-19 pandemic. Our ability to do so is dependent on
                guidelines set by the city of San Francisco and by our wedding
                venue, and we thank you in advance for your understanding and
                willingness to support us by complying with the guidelines.
              </p>
              <p>
                We care deeply for all of you and want to take precautions in
                whatever ways necessary to help keep all safe and healthy. We
                ask that all guests follow social distancing protocols during
                the ceremony and reception, including wearing a mask. Masks may
                be removed while physically eating and drinking or briefly for
                photography and then reapplied. Masks must also be worn when
                dancing with non-family members. Masks will be provided. Hand
                sanitizing stations will be available at various places
                throughout the venue. Those who are unable to wear a mask due to
                health conditions, we ask that you bring and wear a face shield.
              </p>
              <input
                name="lastName"
                placeholder="Last Name"
                type="text"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
              <input
                name="email"
                placeholder="Email Address"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button disabled={!email || !lastName} onClick={submit}>
                START RSVP
              </button>
            </>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              Please select the attendees in your family or group that are
              included on on your invite:
              {people.map((person, i) => {
                return (
                  <div className="person">
                    <input
                      type="checkbox"
                      id="scales"
                      name="scales"
                      onClick={() => {
                        people[i] = {
                          ...people[i],
                          checked: !people[i].checked,
                        }
                        setPeople(people)
                      }}
                    />
                    {person.firstName} {person.lastName}
                  </div>
                )
              })}
              <button onClick={confirmRSVP}>CONFIRM RSVP</button>
            </div>
          )}
        </>
      )}

      <ToastContainer />
    </div>
  )
}
