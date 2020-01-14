import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './big-news.css'

class BigNews extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>
        <Row>
          <Col className="first-news" lg={6} md={6}>
            <div className="news-img-overlay"></div>
            <img alt="news" className="news-img" src="./news-imgs/464x261-1.jpeg" />
            <img alt="share" className="share-icon" src="./icons/share.png" />
            <div className="news-info">
              <div className="news-category">
                BRASIL
              </div>
              <h5 className="news-title">
                Nullam arcu lacus, tincidunt vel efficitur
              </h5>
              <div className="news-description">
                Vivamus vitae mauris eget enim gravida eleifend. Nunc et diam ddfsfsd sfdf sdfsdf sdfsdfsd sdfsdfsd fsdfsdfd fdfdsf fdf dfd
              </div>
            </div>
          </Col>
          <Col className="first-news" lg={6} md={6}>
            <div className="news-img-overlay"></div>
            <img alt="news" className="news-img" src="./news-imgs/464x261-2.jpeg" />
            <img alt="share" className="share-icon" src="./icons/share.png" />
            <div className="news-info">
              <div className="news-category">
                MODA
              </div>
              <h5 className="news-title">
                Aenean quis risus vel nulla maximus
              </h5>
              <div className="news-description">
              Quisque aliquet euismod justo, sit amet sodales eros sagittis u ddfsfsd sfddsdf sdfsdf sdfsdfsd sdfsdfsd fsdfsdfd fdfdsf fdf dfd
              </div>
            </div>
          </Col>
        </Row>
      </section>
    )
  }
}

export default BigNews