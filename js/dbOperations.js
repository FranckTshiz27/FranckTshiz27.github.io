let pNom = null;
let pProfession= null;
let spPostNom= null;
let pDescription = null;
let spHtml=null;
let spCss = null;
let spJs = null;
let spJse = null;
let spCsharp = null;
let spSass = null;
let spBootstrap = null;
let spJfx = null;
let spMysql = null;
let spSqlserver = null;
let spIreport = null;
let spCrystal = null;
let spScrum = null;
let languages = null;
let librairies = null;
let  basesDeDonnees = null;
let reportings = null;
let gestionProjets = null;



initComponents();

getIdentite();
getDescription();
getCompetences();


function getIdentite() 
{
    
fetch("https://francktshiz27.github.io/data/db.json")
.then (function(reponse) {
    return reponse.json(); 
})
.then(function(data) 
{
    
    JSON.stringify(data.identite);
    displayIdentite(data.identite)
    
})  
}


function getDescription() 
{
    
fetch("https://francktshiz27.github.io/data/db.json")
.then (function(reponse) {
    return reponse.json(); 
})
.then(function(data) 
{
    JSON.stringify(data);
    displayDescription(data.description)
    
})  
}


function getCompetences() 
{
    
fetch("https://francktshiz27.github.io/data/db.json")
.then (function(reponse) {
    return reponse.json(); 
})
.then(function(data) 
{
    

   
    displayCompetences(data.competences)
    
})  
}

function initComponents()
{
   pNom= document.getElementById("nom");
   spPostNom= document.getElementById("postNom")
   pProfession= document.getElementById("profession");
   pDescription = document.getElementById("description");

   spHtml = document.getElementById("html");
   spCss = document.getElementById("css");
   spSass = document.getElementById("sass");
   spJs = document.getElementById("js");
   spJse = document.getElementById("jse");
   spCsharp = document.getElementById("csharp");
   

   spBootstrap= document.getElementById("bootstrap");
   spJfx = document.getElementById("jfx");

   spMysql = document.getElementById("mysql");
   spSqlserver = document.getElementById("sqlserver");
   spIreport = document.getElementById("ireport");
   spCrystal = document.getElementById("crystal");
   spScrum = document.getElementById("scrum");

   languages = [spHtml,spCss,spSass,spJse,spJs,spCsharp];
   librairies = [spBootstrap,spJfx];
   basesDeDonnees = [spMysql,spSqlserver];
   reportings = [spIreport,spCrystal];
   gestionProjets = [spScrum];


}

function displayIdentite(data) 
{
      
       pNom.innerText= data[0]["nom"];
       spPostNom.innerText= data[1]["postNom"];
       pProfession.innerText= data[2]["profession"];
       

}

function displayDescription(data) 
{
   
    pDescription.innerText= data[0]["desc"];

}



function displayCompetences(data) 
{
    
   

   setUpCompetences(data[0],languages);
   
   setUpCompetences(data[1],librairies);
   setUpCompetences(data[2],basesDeDonnees);
   setUpCompetences(data[3],reportings);
   setUpCompetences(data[4],gestionProjets);
  

}

function setUpCompetences(data, container)
{

   for (let index = 0; index < container.length; index++) 
   {
      
       container[index].innerText = data[index]
   }
}
