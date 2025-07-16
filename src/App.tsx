import { createContext, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Store from "./pages/Store";

export const LanguageContext = createContext<{ lang: 'ko' | 'en'; setLang: Dispatch<SetStateAction<'ko' | 'en'>> }>({ lang: 'ko', setLang: () => {} });

function App() {
  const [lang, setLang] = useState<'ko' | 'en'>('ko');
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/goods" element={<Store />} />
            {/* 추후 About, Goods, Contact 등 추가 */}
          </Routes>
        </div>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;