window.onload = function(){
    let zodis = "medis";
    let zodis2 = "berzas";
    let zodis3 = "azuolas";
    let zodziai = SudetiZodis(zodis);
    let zodziai2 = SudetiZodis(zodis2);
    let zodziai3 = SudetiZodis(zodis3);
    console.log(zodziai);
    console.log(zodziai2);
    console.log(zodziai3);
}
function SudetiZodis(zodis){
    return zodis + zodis;
}