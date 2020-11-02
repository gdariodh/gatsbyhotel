import { graphql, useStaticQuery } from "gatsby"

const useSeo = () => {
  const {
    datoCmsSite: { globalSeo },
  } = useStaticQuery(graphql`
    query {
      datoCmsSite {
        globalSeo {
          siteName
          titleSuffix
          fallbackSeo {
            title
            description
          }
        }
      }
    }
  `)

  return globalSeo
}

export default useSeo
