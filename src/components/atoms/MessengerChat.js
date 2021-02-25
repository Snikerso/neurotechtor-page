

class MessengerChat extends React.Component {
    componentDidMount() {
      window.fbAsyncInit = function() {
        FB.init({
            xfbml: true,
            version: 'v10.0'
        });
      };
  
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }

    render() {
      return (
        <>
          <div id="fb-root" />
          <div class="fb-customerchat"
        attribution="setup_tool"
        page_id="111736127626645">
      </div>
</>
      );
    }
  } 
  
  export default MessengerChat;