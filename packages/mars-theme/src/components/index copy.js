import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import Footer from "./footer";
import List from "./list";
import Post from "./post";
import Home from "./home";
import Brands from "./brands";
import College from "./college";
import Laird from "./laird";
import NationalAccounts from "./nationalaccounts";
import Lairdplastics from "./lairdplastics";
import ModernPlastics from "./modern-plastics";
import CalsakPlastics from "./calsakplastics";
import PlasticProducts from "./plastic-products";
import PVCTechPlastics from "./PVC-tech";
import FarcoPlastics from "./farco-plastics";
import RMIPlastics from "./rmi-plastics";
import LehighValley from "./lvp";
import EPP from "./EPP";
import HartSupply from "./hart-supply";
import EMPlastics from "./emplastic";
import Sales from "./sales";
import About from "./about";
import Loading from "./loading";
import Title from "./title";
import Career from "./career";
import PageError from "./page-error";
import hartSupply from "./hart-supply";
import PVCTech from "./PVC-tech";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  console.log(data)

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <Home when={data.isHome} />
          <Career when={state.router.link=='/career/'} />
          <Brands when={state.router.link=='/brands/'} />
          <Laird when={state.router.link=='/laird/'} />
          <Sales when={state.router.link=='/sales/'} />
          <EMPlastics when={state.router.link=='/em-plastic/'} />
          <ModernPlastics when={state.router.link=='/modern-plastics/'} />
          <CalsakPlastics when={state.router.link=='/calsak-plastics/'} />
          <RMIPlastics when={state.router.link=='/rmi-plastics/'} />
          <HartSupply when={state.router.link=='/hart-supply/'} />
          <FarcoPlastics when={state.router.link=='/farco-plastics/'} />
          <PVCTechPlastics when={state.router.link=='/pvc-tech/'} />
          <PlasticProducts when={state.router.link=='/plastic-products/'} />
          <LehighValley when={state.router.link=='/lehigh-valley-plastics/'} />
          <College when={state.router.link=='/college/'} />
          <About when={state.router.link=='/about/'} />
          <EPP when={state.router.link=='/epp/'} />
          <Lairdplastics when={state.router.link=='/laird-plastics/'} />
          <NationalAccounts when={state.router.link=='/nationalaccounts/'} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
      <Footer />
    </>
  );
};

export default connect(Theme);

const globalStyles = css`

html {font-family:montserrat;}
  body {
    margin: 0;
    font-family:montserrat;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  `;
