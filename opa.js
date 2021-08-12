function getParameterByName2(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var $tab_active = document.querySelector("#v-pills-tab > .nav-link.active")


function cargarOfertas(){
  $tab_active.classList.remove("active")
  console.log($tab_active)
  document.querySelector("#v-pills-messages-tab").classList.remove("active");
  document.querySelector("#v-pills-trabaja-tab").classList.add("active");

}

const vacantes = getParameterByName2("vacantes")
if(vacantes==1){
  console.log("carga")
  cargarOfertas()
}
    // document.querySelector("#v-pills-trabaja-tab").classList.add("active");



  //   <script type="text/javascript">
  //   var team = getParameterByName("team")||3;
  //   if(team==1){
  //       var tab_empresa = document.querySelector("#v-pills-empresa-tab");
  //       var empresa_content = document.querySelector("#v-pills-empresa");
  //       tab_empresa.classList.remove("active");
  //       empresa_content.classList.remove("show");
  //       empresa_content.classList.remove("active");
    
  //       var pestania_team = document.querySelector("#v-pills-home-tab");
  //       var team_contenido = document.querySelector("#v-pills-comercial");
  //       pestania_team.classList.add("active");
  //       team_contenido.classList.add("active");
  //       team_contenido.classList.add("show");
    
  //       mostrar_colaboradores("e", "comercial")
  //   }
  // </script>


  
    <script type="text/javascript">
      var team = getParameterByName("team")||3;
      if(team){
          var tab_empresa = document.querySelector("#v-pills-empresa-tab");
          var empresa_content = document.querySelector("#v-pills-empresa");
          tab_empresa.classList.remove("active");
          empresa_content.classList.remove("show");
          empresa_content.classList.remove("active");
      
          var pestania_team = document.querySelector("#v-pills-messages-tab");
          var team_contenido = document.querySelector("#v-pills-comercial");
          pestania_team.classList.add("active");
          team_contenido.classList.add("active");
          team_contenido.classList.add("show");
      
          mostrar_colaboradores("e", "consultoría")
      }
  </script>