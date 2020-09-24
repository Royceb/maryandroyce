import React from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { graphql } from 'gatsby'
import Confetti from 'react-confetti'

let PHOTOS_CACHE = []
class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
      runConfetti: true,
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.toggleRunConfetti = this.toggleRunConfetti.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
    document.addEventListener('mousedown', this.handleClickOutside)

    document.addEventListener('gesturestart', function(e) {
      e.preventDefault()
      document.body.style.zoom = 0.99
    })

    document.addEventListener('gesturechange', function(e) {
      e.preventDefault()

      document.body.style.zoom = 0.99
    })
    document.addEventListener('gestureend', function(e) {
      e.preventDefault()
      document.body.style.zoom = 1
    })
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

  toggleRunConfetti() {
    this.setState({ runConfetti: !this.state.runConfetti })
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
      photos: PHOTOS_CACHE,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
        photos: PHOTOS_CACHE,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: '',
        photos: PHOTOS_CACHE,
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

  getPhotos() {
    let photos = this.props.data.allContentfulAsset.nodes.reduce(
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

    photos = PHOTOS_CACHE = photos
      .sort(() => 0.5 - Math.random())
      .slice(0, (photos.length - 1) / 2)

    return photos
  }

  render() {
    let photos = []
    if (!this.state.photos) {
      photos = this.getPhotos()
    } else {
      photos = this.state.photos
    }

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
              photos={photos}
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              toggleRunConfetti={this.toggleRunConfetti}
              onOpenArticle={this.handleOpenArticle}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
            />
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg"></div>
        </div>
        <Confetti
          run={this.state.runConfetti}
          colors={['#232526', '#414345', '#fafafa', '#434343', '#4b7c95']}
        />
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
