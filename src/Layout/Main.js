import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { Helmet } from "react-helmet";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    <section>
      {/* <!-- Messenger Chat plugin Code --> */}
      <div id="fb-root"></div>

      {/* <!-- Your Chat plugin code --> */}
      <div id="fb-customer-chat" className="fb-customerchat"></div>

      <Helmet>
        <script>
          {`
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "103296525886048");
            chatbox.setAttribute("attribution", "biz_inbox");
          `}
        </script>

        {/* <!-- Your SDK code --> */}
        <script>
          {`
            window.fbAsyncInit = function() {
              FB.init({
                xfbml: true,
                version: 'v16.0'
              });
            };

            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
          `}
        </script>
      </Helmet>
    </section>
    </div>
  );
};

export default Main;

