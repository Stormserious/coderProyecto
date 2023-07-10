
const array = require("./collectibles");


let unifiedCollectibles = {figuras : array,
                          listFigures: function(){
                            for(const element of (this.figuras)){
                              
                              console.log(element.id, element.nombre)
                             
                            }
                          }       ,
                          
                            figuresByBrand: function(x) {
                              console.log('\n');
                              console.log('-------------');
                              let search = this.figuras.filter(function(m){
                                    return [m.id] == x
                              })
                              console.log(search);
                            }
                          };


console.log(unifiedCollectibles.figuresByBrand(1))
