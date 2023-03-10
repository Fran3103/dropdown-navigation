const cierre = document.querySelector('.close');
const menu = document.querySelector('.menu');
const upFeat = document.querySelector('.features_up');
const downFeat= document.querySelector('.features_down');
const upCompany = document.querySelector('.company_up');
const downCompany = document.querySelector('.company_down');
const secciones = document.querySelector('.secciones');
const subFeat = document.querySelector('.features_list_sub');
const subCompany = document.querySelector('.company_list_sub');
const capa = document.querySelector('.capa');
const features = document.querySelector('#features');
const company = document.querySelector('#company');



menu.addEventListener('click', () =>{
    
    openMenu(secciones,capa, menu);
    
    
} )

cierre.addEventListener('click', () =>{
    
    cierreMenu(secciones,capa, menu);
    
    
} )





downFeat.addEventListener('click', () =>{
    
    open(subFeat, upFeat, downFeat);
    
    
} )


features.addEventListener('click', () =>{
    
    open(subFeat, upFeat, downFeat);
    
    
} )

upFeat.addEventListener('click', () =>{
    close(subFeat, upFeat, downFeat)
})

company.addEventListener('click', () =>{
    
    open(subCompany, upCompany, downCompany);
    
    
} )

downCompany.addEventListener('click', () =>{
    
    open(subCompany, upCompany, downCompany);
    
    
} )

upCompany.addEventListener('click', () =>{
    close(subCompany, upCompany, downCompany)
})


function open (subFeat, upFeat, downFeat){
    subFeat.style.display = 'flex';
    upFeat.style.display = 'flex';
    downFeat.style.display = 'none';
}

function close (subFeat, upFeat, downFeat){
    subFeat.style.display = 'none';
    upFeat.style.display = 'none';
    downFeat.style.display = 'flex';
}

function open2 (subCompany, upCompany, downCompany){
    subCompany.style.display = 'flex';
    upCompany.style.display = 'flex';
    downCompany.style.display = 'none';
}

function close2 (subCompany, upCompany, downCompany){
    subCompany.style.display = 'none';
    upCompany.style.display = 'none';
    downCompany.style.display = 'flex';
}


function openMenu (secciones, capa, menu){
    
    secciones.style.display = 'flex';
    capa.style.display = 'flex';
    menu.style.display= 'none'
}

function cierreMenu (secciones, capa, menu){
    
    secciones.style.display = 'none';
    capa.style.display = 'none';
    menu.style.display = ' flex';
}
