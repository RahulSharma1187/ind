import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { MeetTheFounder } from "./pages/MeetTheFounder";
import { Services } from "./pages/Services";
import { ScienceResearch } from "./pages/ScienceResearch";
import { ContactUs } from "./pages/ContactUs";
import { Error } from "./pages/Error";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const App = ({ children }) => {
  return (
    <BrowserRouter>
      <Navbar />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/meetTheFounder" element={ <MeetTheFounder />} />
          <Route path="/services" element={ <Services />} />
          <Route path="/scienceResearch" element={ <ScienceResearch />} />
          <Route path="/contactUs" element={ <ContactUs />} />
          <Route path="*" element={ <Error />} />
        </Routes>
      </LocalizationProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default App;