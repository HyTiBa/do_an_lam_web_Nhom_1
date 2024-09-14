     <div className="app">
        {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeorder />} />
        </Routes>
        <Footer />
        </div>
