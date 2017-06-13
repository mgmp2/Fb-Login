window.fbAsyncInit = function() {
  FB.init({
    appId            : 1807162776265912,
    autoLogAppEvents : true, //Habilita las cookies para que el server puede acceder a la sesion
    xfbml            : true, //parsea los plugins sociales en la pagina
    version          : 'v2.9' //usa version 2.9
  });
  FB.AppEvents.logPageView();
};


function loginHandler(response) {
    if(response.status  === 'connected') {
        state.status = 'Conectado';
        FB.api('/me?fields=email,name', user => {
            status.user = user;
            state.doRender();
        });
    } else if (response.status === 'not_authorized') {
        state.user = null;
        state.status = 'Aplicación no autorizada';
        state.doRender();
    }
}


function doLogin() {
    FB.login(loginHandler, {scope: 'email'});
}
