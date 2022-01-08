
import './App.css';
import {Navbar,Brands, CTA} from './components'
import {Header, WhatGPT3, Footer, Blogs, Possibility, Features} from './containers'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brands/>
      <Possibility/>
      <WhatGPT3 />
      <Features />
      <CTA/>
      <Blogs />
      <Footer/>
      </div>
  );
}

export default App;
