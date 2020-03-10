import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01_2.png'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import paypal from '../images/paypal.png'
import amazon from '../images/amazon.png'
import MapContainer from './MapContainer'
import WeddingGallery from './WeddingGallery'

const addressStyle = {
  fontSize: '12px',
}

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
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
            We met in 6th grade at Springstowne Middle School where we developed
            a special and genuine friendship that we both knew would last a
            lifetime. Growing up together in Vallejo, we were both parts of,
            sometimes interweaving, groups of close-knit friends, but our
            friendship was always something that stood out from the rest.
          </p>
          <h3 style={{ textAlign: 'center' }}>April 15, 2010</h3>
          <span className="image main">
            <img
              src="https://images.ctfassets.net/tpdbsmpvmn6p/3z9XpbHtviqbjsvxF3hoJY/4edb7f36023724a42367064b42e0ae93/IMG_9778_2.jpg"
              alt=""
            />
          </span>
          <p>
            We graduated middle and high school, where we had many classes
            together and were able to strengthen our friendship. We both
            supported eachother in all aspects of life, whether it was sports,
            school, family, relationships, just about anything.
          </p>

          <p>
            After we graduated highschool, like many friends, we parted ways.
            Mary went to U.C. Santa Barbra and Royce went to San Francisco
            State. We stayed in touch, but not nearly as much as we did growing
            up. Sometimes, months would pass without either one of us hearing
            from each other.
          </p>

          <h3 style={{ textAlign: 'center' }}>May 8, 2015</h3>
          <span className="image main">
            <img
              src="https://images.ctfassets.net/tpdbsmpvmn6p/P5YNT8a17P4FhOWHDZzi9/79c90ab5e2d8899999bcbf4d363a86d2/IMG_0086.jpg  "
              alt=""
            />
          </span>
          <p>
            One day, while Royce was on his way to class via the{' '}
            <a href="https://www.google.com/maps/place/Sunset+Blvd+%26+Taraval+St/@37.742108,-122.49435,15z/data=!4m2!3m1!1s0x0:0x999132b9c4e40fd6?sa=X&ved=2ahUKEwjxqevd2o7oAhUJ7J4KHU_bBNsQ_BIwEnoECBMQCA">
              29 bus on Sunset and Taraval
            </a>
            , he saw Mary on the bus. This was a huge surprise to Royce because
            he has taken this bus for years and had no idea Mary was now living
            in San Francisco. From there, our friendship brought us back into
            each others lives. All of the sudden, we were just two really good
            friends trying to reach the next milestone in life but this time, we
            fell in love.
          </p>
          <h3 style={{ textAlign: 'center' }}>July 31, 2019</h3>
          <span className="image main">
            <img
              src="https://images.ctfassets.net/tpdbsmpvmn6p/2v3h7JNrMCDpbjwnRK6O4h/5ce7b28b76e9e0459cd9cae9a3bfa682/IMG_7469.jpg"
              alt=""
            />
          </span>
          <p>
            We both loved and supported each other while we watched each other
            graduated college, get our first job, move into our first apartment,
            and eventually buy our first house.
          </p>

          <h3 style={{ textAlign: 'center' }}>December 23, 2019</h3>
          <span className="image main">
            <img
              src="https://images.ctfassets.net/tpdbsmpvmn6p/1dliSAQSwe7DAvxHSYxxlK/146b32dca9efb33c36fe880f21d9239a/IMG_3345.jpg"
              alt=""
            />
          </span>
          <p>
            We went to Austin, Texas for a Christmas vacation, and Royce
            proposed to Mary at the Trial of Lights.
          </p>
          {close}
        </article>

        {/* Gallery */}
        <article
          id="gallery"
          className={`${this.props.article === 'gallery' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Gallery</h2>
          <WeddingGallery photos={this.props.photos} />
          {close}
        </article>

        <article
          id="accommodations"
          className={`${
            this.props.article === 'accommodations' ? 'active' : ''
          } ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Accommodations</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <h3>Recommended Place of Stay:</h3>
          <a href="https://www.hotelviasf.com">
            <h2>
              Hotel Via <br />{' '}
              <span style={addressStyle}>
                138 King St, San Francisco, CA 94107
              </span>
            </h2>
          </a>
          <img
            width="500"
            src="https://www.hotelviasf.com/wp-content/uploads/hotel-via-banner-image.jpg"
          />
          <MapContainer />
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          id="gifts"
          className={`${this.props.article === 'gifts' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
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
            For your convenience, you can use the buttons below to quickly send
            a gift to us!
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
              Mary Aboudi & Royce Brooks <br /> 8151 Carlise Way <br /> Vallejo
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
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
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
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
