// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


// Step 2: Define your component
const IndexPage = () => {
  return (
      <Layout pageTitle="Page d'accueil">
        <p>Le texte de la page</p>
        <StaticImage alt="Icon de Fwaz" src="../images/fwaz.jpg"/>
      </Layout>
    )
}

// You'll learn about this in the next task, just copy it for now

// Step 3: Export your component
export default IndexPage
export const Head = () => <title>Le tribunal</title>