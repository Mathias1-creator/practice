import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from '@/components/shared/ScrollToTop';

import Home from '@/pages/Home';
import Services from '@/pages/Services';
import PoisonOakRemoval from '@/pages/PoisonOakRemoval';
import ForRealtors from '@/pages/ForRealtors';
import About from '@/pages/About';
import Contact from '@/pages/Contact';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/poison-oak-removal" element={<PoisonOakRemoval />} />
          <Route path="/for-realtors" element={<ForRealtors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Toaster />
      </Router>
    </QueryClientProvider>
  )
}

export default App
