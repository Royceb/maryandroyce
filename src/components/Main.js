import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import paypal from '../images/paypal.png'
import amazon from '../images/amazon.png'
import WeddingGallery from './WeddingGallery'
import { RsvpForm } from './RsvpForm'
import { VirtualRsvpForm } from './VirtualRsvp'

const addressStyle = {
  fontSize: '12px',
}

const Main = props => {
  let close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    ></div>
  )

  useEffect(() => {
    setTimeout(() => {
      const pathname = window.location.pathname
      if (pathname === '/virtualrsvp' || pathname === '/rsvp') {
        props.onOpenArticle(pathname.substring(1)) // remove slash
      }
    }, 820)
  }, [])

  return (
    <div
      ref={props.setWrapperRef}
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <article
        id="intro"
        className={`${props.article === 'intro' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Our Story</h2>
        <h3 style={{ textAlign: 'center' }}>October 31, 2005</h3>
        <span className="image main">
          <img
            src="https://images.ctfassets.net/tpdbsmpvmn6p/5Ruba317PHG79t4E9mjVrS/3a2815024bff3527dd3835102365c030/IMG_9779.jpg"
            alt=""
          />
        </span>
        <p>
          We met in 6th grade at Springstowne Middle School where we developed a
          special and genuine friendship that we both knew would last a
          lifetime. Growing up together in Vallejo we both were fortunate enough
          to have diverse groups of close-knit friends, but our friendship was
          always something that stood out from the rest.
        </p>
        <h3 style={{ textAlign: 'center' }}>April 15, 2010</h3>
        <span className="image main">
          <img
            src="https://images.ctfassets.net/tpdbsmpvmn6p/3z9XpbHtviqbjsvxF3hoJY/4edb7f36023724a42367064b42e0ae93/IMG_9778_2.jpg"
            alt=""
          />
        </span>
        <p>
          We graduated from middle and high school and had many classes
          together. This gave us time to strengthen our friendship even more. We
          both supported each other in all aspects of life, whether it was
          sports, school, family, relationships, just about anything.
        </p>

        <p>
          After we graduated high school, like many friends, we parted ways.
          Mary went to U.C. Santa Barbara and Royce went to San Francisco State.
          We stayed in touch, but not nearly as much as we did growing up.
          Sometimes months would pass without either one of us hearing from each
          other.
        </p>

        <h3 style={{ textAlign: 'center' }}>June 7, 2016 </h3>
        <span className="image main">
          <img
            src="https://images.ctfassets.net/tpdbsmpvmn6p/6hS4UoTYSJEyZFx2hT72j3/10c3eb6cab112a1e200bcfebfcf4bcad/IMG_6998.JPG"
            alt=""
          />
        </span>
        <p>
          One day, while Royce was on his way to class via the{' '}
          <a href="https://www.google.com/maps/place/Sunset+Blvd+%26+Taraval+St/@37.742108,-122.49435,15z/data=!4m2!3m1!1s0x0:0x999132b9c4e40fd6?sa=X&ved=2ahUKEwjxqevd2o7oAhUJ7J4KHU_bBNsQ_BIwEnoECBMQCA">
            29 bus on Sunset and Taraval
          </a>
          , he saw Mary on the bus. This was a huge surprise to Royce because he
          had taken this bus for years and had no idea Mary was now living in
          San Francisco. From there, our bond brought us back into each other's
          lives. All of a sudden we were two best friends trying to reach the
          next milestone in life, again, but this time, we fell in love.
        </p>
        <h3 style={{ textAlign: 'center' }}>July 31, 2019</h3>
        <span className="image main">
          <img
            src="https://images.ctfassets.net/tpdbsmpvmn6p/2v3h7JNrMCDpbjwnRK6O4h/5ce7b28b76e9e0459cd9cae9a3bfa682/IMG_7469.jpg"
            alt=""
          />
        </span>
        <p>
          We watched each other graduate college, get our first jobs, move into
          our first apartment together, and eventually buy our first home.
        </p>

        <h3 style={{ textAlign: 'center' }}>December 23, 2019</h3>
        <span className="image main">
          <img
            src="https://images.ctfassets.net/tpdbsmpvmn6p/1dliSAQSwe7DAvxHSYxxlK/146b32dca9efb33c36fe880f21d9239a/IMG_3345.jpg"
            alt=""
          />
        </span>
        <p>
          We went to Austin, Texas for a Christmas vacation and Royce proposed
          to Mary at the Trail of Lights. She said yes!
        </p>
        {close}
      </article>

      {/* Gallery */}
      <article
        id="gallery"
        className={`${props.article === 'gallery' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Gallery</h2>
        <WeddingGallery photos={props.photos} />
        {close}
      </article>

      <article
        id="virtualrsvp"
        className={`${props.article === 'virtualrsvp' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <VirtualRsvpForm toggleRunConfetti={props.toggleRunConfetti} />
        {close}
      </article>

      <article
        id="rsvp"
        className={`${props.article === 'rsvp' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">RSVP</h2>
        <RsvpForm toggleRunConfetti={props.toggleRunConfetti} />
        {close}
      </article>

      <article
        id="gifts"
        className={`${props.article === 'gifts' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Gifts</h2>
        <h3>
          Your presence at our wedding is a gift enough but if you wish to buy
          us something, a monetary gift or gift card will be greatly
          appreciated.
        </h3>

        <p>
          For your convenience, you can use the buttons below to quickly send a
          gift to us!
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            style={{
              margin: '10px',
              cursor: 'pointer',
              border: 'none',
            }}
            target="_blank"
            href="https://paypal.me/maryandroyce"
          >
            <img style={{ width: '16rem' }} src={paypal} />
          </a>
          <a
            style={{
              margin: '10px',
              cursor: 'pointer',
              border: 'none',
            }}
            target="_blank"
            href="https://www.amazon.com/gift-cards"
          >
            <img style={{ width: '16rem' }} src={amazon} />
          </a>
        </div>
        <br />

        <p style={{ textAlign: 'center' }}>
          <a>
            Mary Aboudi & Royce Brooks <br /> 8151 Carlisle Way <br /> Vallejo
            CA, 94591
          </a>
          <br />
          <br />
          <a>aboudibrooks@gmail.com</a>
        </p>
        <h4 style={{ textAlign: 'center' }}>
          Thank you <span>❤️</span>
        </h4>

        {close}
      </article>

      <article
        id="contact"
        className={`${props.article === 'contact' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Contact</h2>
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4"></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Reset" />
            </li>
          </ul>
        </form>

        {close}
      </article>
    </div>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  onOpenArticle: PropTypes.func,
  toggleRunConfetti: PropTypes.func,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
