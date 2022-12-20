import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return(
        <Layout pageTitle="Page About">
            <p>Corps de texte de la page about</p>
        </Layout>
    )
}

export default AboutPage
export const Head = () => <Seo title ="À Propos"/>