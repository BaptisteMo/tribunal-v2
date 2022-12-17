import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return(
        <Layout pageTitle="Page About">
            <p>Corps de texte de la page about</p>
        </Layout>
    )
}

export default AboutPage
export function Head() {
    return (
        <>
        <title>About page</title>
        <meta name="description" content="Description de la page about"/> 
      </>  
    )
  }