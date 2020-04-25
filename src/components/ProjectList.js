import React from 'react'
import { Link } from 'gatsby'
import { Grid, Row, Col } from 'react-flexbox-grid'

export function ProjectList({ data }) {
  return (
    <div>
      <h2>Games</h2>
      <br />
      <div style={{ textAlign: 'center' }}>
        <Grid fluid>
          <Row>
            {data.map(p => (
              <Col xs={12} sm={12} md={6} lg={6} key={p.title}>
                <Link to={'/games/view'} state={p} key={p.title}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: 250,
                        height: 200,
                        margin: 10,
                        background: `url(${p.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                      }}
                    />
                    <p>{p.title}</p>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Grid>
      </div>
    </div>
  )
}
