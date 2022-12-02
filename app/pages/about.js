import Head from '../components/Navigation'
const  About = () => {

  const  { t } = useTranslation('en', { useSuspense: false })

  return (
      <>
        <Head />
        <h1>About</h1>
      </>
  )
}

export default About 