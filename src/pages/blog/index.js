import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { excerptStyle } from '../../components/layout.module.css'

const BlogPage = ({data}) => {

    return(
        <Layout pageTitle="My blog">
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <Link to={`/blog/${node.frontmatter.slug}`}>
                        <h2>{node.frontmatter.title}</h2>
                        </Link>
                        <p>Date : {node.frontmatter.date}</p>
                        <p className={excerptStyle}>{node.excerpt}</p>
                    </article>
                )

                )
            }
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: {frontmatter: {date: DESC}}) {
        nodes {
            frontmatter {
            date(formatString: "D MMMM YYYY")
            title
            slug
            }
            id
            excerpt
            }
        }
    }
`
export const Head = () => <Seo title ="My blog post"/>
export default BlogPage 