import React from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { graphql } from 'gatsby'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  handleOpenArticle(article) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      })
    }, 350)
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: '',
      })
    }, 350)
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle()
      }
    }
  }

  render() {
    const photos = this.props.data.allContentfulAsset.nodes.reduce(
      (photos, node) => {
        photos = [].concat(...photos, {
          src: `https:${node.file.url}`,
          width: node.file.details.image.width,
          height: node.file.details.image.height,
        })
        return photos
      },
      []
    )

    const randomPhotos = photos
      .sort(() => 0.5 - Math.random())
      .slice(0, (photos.length - 1) / 2)
    return (
      <Layout location={this.props.location}>
        <div
          className={`body ${this.state.loading} ${
            this.state.isArticleVisible ? 'is-article-visible' : ''
          }`}
        >
          <div id="wrapper">
            <Header
              onOpenArticle={this.handleOpenArticle}
              timeout={this.state.timeout}
            />
            <Main
              photos={randomPhotos}
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
            />
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg"></div>
          <div style={{ background: '#1b1f22', padding: '50px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                maxWidth: '700px',
                margin: '0 auto',
              }}
            >
              <h3>
                Welcome to our wedding website, we can't wait to celebrate our
                special day with you!
              </h3>
              <p>
                We've created this website as a convenient and interactive way
                to share all of the important details with you in the lead up to
                our wedding.
                <br />
                <br />
                Invitations will be sent out in the next couple of months!
              </p>

              <p>❤️ Mary and Royce</p>
            </div>
            <Footer footerText float timeout={this.state.timeout} />
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query allImages {
    allContentfulAsset {
      nodes {
        file {
          url
          details {
            size
            image {
              height
              width
            }
          }
        }
      }
    }
  }
`

export default IndexPage
