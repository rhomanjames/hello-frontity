import { Global, css, connect, styled, Head } from "frontity";
import Favicon from 'react-favicon'
import Switch from "@frontity/components/switch";
import Header from "./header";
import Footer from "./footer";
import Home from "./home";
import Brands from "./brands";
import College from "./college";
import Xml_data from "./XML";
import Laird from "./laird";
import Sustainability from "./sustainability";
import Lairdplastics from "./lairdplastics";
import ModernPlastics from "./modern-plastics";
import AIAPlastics from "./aia-plastics";
import EPlastics from "./eplastics";
import CalsakPlastics from "./calsakplastics";
import PlasticProducts from "./plastic-products";
import PVCTechPlastics from "./PVC-tech";
import USCutter from "./us-cutter";
import FarcoPlastics from "./farco-plastics";
import PortPlastics from "./port-plastics";
import RMIPlastics from "./rmi-plastics";
import LehighValley from "./lvp";
import Testimonials from "./testimonials";
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
      <Favicon url='https://res.cloudinary.com/usamobileappsllc/image/upload/v1643371902/Untitled_design_24_b72ebd.png' />
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <Home when={data.isHome} />
          <Home when={state.router.link=='/locations/'} />
          <Home when={state.router.link=='/products-01/'} />
          <Home when={state.router.link=='/products-solutions/'} />
          <Career when={state.router.link=='/career/'} />
          <Career when={state.router.link=='/careers/'} />
          <Career when={state.router.link=='/career/#jobs'} />
          <Brands when={state.router.link=='/brands/'} />
          <EMPlastics when={state.router.link=='/em-plastic/'} />
          <ModernPlastics when={state.router.link=='/modern-plastics/'} />
          <CalsakPlastics when={state.router.link=='/calsak-plastics/'} />
          <RMIPlastics when={state.router.link=='/rmi-plastics/'} />
          <HartSupply when={state.router.link=='/hart-supply/'} />
          <FarcoPlastics when={state.router.link=='/farco-plastics/'} />
          <PortPlastics when={state.router.link=='/port-plastics/'} />
          <PVCTechPlastics when={state.router.link=='/pvc-tech/'} />
          <PlasticProducts when={state.router.link=='/plastic-products/'} />
          <USCutter when={state.router.link=='/uscutter/'} />
          <EPlastics when={state.router.link=='/eplastics/'} />
          <AIAPlastics when={state.router.link=='/aia-plastics/'} />
          <LehighValley when={state.router.link=='/lehigh-valley-plastics/'} />
          <College when={state.router.link=='/college/'} />
          <College when={state.router.link=='/college-recruitment/'} />
          <About when={state.router.link=='/about/'} />
          <About when={state.router.link=='/company/'} />
          <About when={state.router.link=='/history/'} />
          <About when={state.router.link=='/who-is-north-american-plastics/'} />
          <EPP when={state.router.link=='/epp/'} />
          <Testimonials when={state.router.link=='/testimonials/'} />
          <Lairdplastics when={state.router.link=='/laird-plastics/'} />
          <Xml_data when={state.router.link=='/sitemap.xml/'}  />
          <Sustainability when={state.router.link=='/sustainability/'} />
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
