const arrayBici = require("./datosBici");
//console.log(arrayBici);

let dhBici = 
             {
                bicicletas : arrayBici,
                buscarBici : function(id){
                                    let search = this.bicicletas.filter(function(bici){
                                        return bici.id == id
                                    });
                                    if(search.length > 0){
                                        return true
                                    }else {
                                        return null
                                    };
                                    },
                 venderBici : function(id){
                              let search = this.buscarBici(id);
                              if (search == true){
                                 this.bicicletas.map(function(bici){
                                    return bici.Vendida = 'si';
                                }) }
                                console.log('\n');
                                console.log('-------------');
                                console.log(this.bicicletas[id])
                              

                              
                                    
                                    
                                      
                                      },
                 biciParaLaVenta : function(){
                                    console.log('\n');
                                    console.log('-------------');
                                    let search = this.bicicletas.filter(function(bici){
                                        return bici.Vendida == 'no';
                                    })
                                    console.log(search);
                                        }, 
                 totalDeVentas : function(){
                                let total = 0;
                                for (let i = 0; i < this.bicicletas.length; i++){
                                    if (this.bicicletas[i].Vendida == 'si'){
                                     total = this.bicicletas.reduce(function(acum,act){
                                            return acum + act;                                       
                                    })}}
                                    console.log(total)}

                 };

console.log(dhBici.totalDeVentas());