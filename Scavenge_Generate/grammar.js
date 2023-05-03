function capitalize (string){return  string.replace(/^\w/, c => c.toUpperCase())}

let grammars = {
    GenerationSimple : function (gram){
        //console.log(gram)
        g = tracery.createGrammar(gram);
        return g.flatten("#origin#")
    }

}