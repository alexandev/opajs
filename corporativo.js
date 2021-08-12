function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function mostrarVacantes(){ 
    let pestania_vacantes = document.querySelector("#trabaja-tab");
    let vacantes_contenido = document.querySelector("#v-pills-trabaja");
    pestania_vacantes.classList.add("active");
    vacantes_contenido.classList.add("active");
    vacantes_contenido.classList.add("show");
}

function mostrar_pestania(){
    const pestaniaUrl = getParameterByName("")
    console.log(pestaniaUrl)

    if(pestaniaUrl==="vacantes"){
        mostrarVacantes()
    }

    if(pestaniaUrl==="team"|| pestaniaUrl==""){
        var pestania_team = document.querySelector("#v-pills-messages-tab");
        var team_contenido = document.querySelector("#v-pills-team");
        pestania_team.classList.add("active");
        team_contenido.classList.add("active");
        team_contenido.classList.add("show");

        mostrar_colaboradores("e", "consultoría")
        
    }
}


mostrar_pestania()



function mostrar_colaboradores(e, area){

    const $templateColaborador = document.querySelector("#template-colaborador").content
    const $fragment = document.createDocumentFragment()
    const $containerColaboradores =document.querySelector(".container-colaboradores")
    const $nombre_area= document.querySelector("#area-nombre")
    const $area_lema= document.querySelector("#area-lema")

    // Eliminando todos los hijos cards antes de pintar los nuevos
    while($containerColaboradores.firstChild){
        $containerColaboradores.removeChild($containerColaboradores.firstChild)
    }

    let boton_presionado= area ||e.target.classList[0].toLowerCase()

    if(boton_presionado== "comercial"){
        $nombre_area.textContent="Equipo Comercial"
        $area_lema.textContent="lema del equipo comercial"
    }
    if(boton_presionado== "desarrollo"){
        $nombre_area.textContent="Equipo de Desarrollo"
        $area_lema.textContent="lema del equipo desarrollo"
    }
    if(boton_presionado== "consultoría"){
        $nombre_area.textContent="Equipo de Consultoría"
        $area_lema.textContent="lema del equipo consultoria"
    }
    if(boton_presionado== "administrativo"){
        $nombre_area.textContent="Equipo Administrativo"
        $area_lema.textContent="lema del equipo administrativo"
    }
    if(boton_presionado== "soporte"){
        $nombre_area.textContent="Equipo de Soporte y Calidad"
        $area_lema.textContent="lema del equipo soporte"
    }

    async function getColaboradoresData(){
        try{
            let res = await fetch("./colaboradores.json")
            let json = await res.json()
            
            if(!res.ok)throw{
                status:res.status, statusText:res.statusText
            }

            json.forEach(colaborador=>{
                if(colaborador.area.toLowerCase()==boton_presionado){
                    $templateColaborador.querySelector(".enlace-linkedin").setAttribute("href",colaborador.linkedin)
                    $templateColaborador.querySelector("img").setAttribute("src",colaborador.foto)
                    $templateColaborador.querySelector("h4").textContent=colaborador.nombre
                    $templateColaborador.querySelector("p").textContent=colaborador.cargo
                    //console.log($templateColaborador)
                    let $clone = document.importNode($templateColaborador, true)
                    $fragment.appendChild($clone)
                }
                $containerColaboradores.appendChild($fragment)
                


            })

        }catch(err){
            console.log(err)
        }
        
    }

    getColaboradoresData()
}

const tabColaboradores = document.querySelectorAll(".tab-colaboradores")
for(let i = 0; i != tabColaboradores.length; i++){
    tabColaboradores[i].addEventListener("click", mostrar_colaboradores)
}



// var pestanias = document.querySelector("#pestanias")

// const vacantes = getParameterByName("vacantes")
// if(vacantes==1){
//     let $tab_seleccionada = document.querySelector("#v-pills-tab .nav-link.active");
//     console.log($tab_seleccionada)
//     // $tab_seleccionada.classList.remove("active");
//     // console.log($tab_seleccionada)
//     // let empresa_content = document.querySelector("#v-pills-empresa");
//     // empresa_content.classList.remove("show");
//     // empresa_content.classList.remove("active");

//     let pestania_vacantes = document.querySelector("#trabaja-tab");
//     let vacantes_contenido = document.querySelector("#v-pills-trabaja");
//     pestania_vacantes.classList.add("active");
//     vacantes_contenido.classList.add("active");
//     vacantes_contenido.classList.add("show");
// }


