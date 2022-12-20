import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({data}) => {

    return(
        <Layout pageTitle="My blog page">
            <ul>
                {
                    data.allFile.nodes.map(node=>(
                        <li key={node.name}>
                            {node.name}
                        </li>
                        ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query {
        allFile {
        nodes {
            name
        }
        }
    }
`
export const Head = () => <Seo title ="My blog post"/>
export default BlogPage 