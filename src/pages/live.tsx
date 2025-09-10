import { Container } from "@mui/material";
import Header from "./Header";
import Iframe from "react-iframe";
import Footer from "./Footer";
import GetUrlPath from "../shared/utilities/getUrlPath";
import WsConnect from "./WsConnect";

//           <Route path="/live" element={<WsConnect />} />

export default function Live() {

     return (<>
        <Header numberPage={3} detail={GetUrlPath()} />
        <Container maxWidth="lg">
            <WsConnect />
        </Container>
        <Footer/>
    </>
    )

}