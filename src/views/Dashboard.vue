<template>
   
  
<body style="background-color: rgb(233, 233, 233);">
    <div class="row">
            <div class=" toggler col-md-2"style="background-color: #222d31; height:700px;" id="effect">
                <div class="sidebar" id="" >
                    <div class="pt-3 pb-3 ml-2">
                        <img src="envol.jpg" class=" rounded-circle "alt="..." width="50px" height="50px">
                            </div>
              
                            <div  class=" text-white form-group"  style="background-color: rgb(231,233,240,0.096);border: 0px; ">
                              <span class="float-left "> <i class="pb-2 pt-1 ml-2 text-white far fa-clock">&nbsp; &nbsp; </i> accueil</span>
                             
                                  </div>
                                
              
                              <div id="accordion" class=" mb-1 pb-1 pt-1 pl-0 float-left">
                 
                              <h6 class="pb-2 pt-2 text-white rounded-0 border-dark mt-1"   style="background-color: rgb(231,233,240,0.096);"> 
                                  <span class="float-left "> <i class="fas fa-user ml-0"></i> &nbsp; 
                                Utilisateur</span>
                                      <i class="fas fa-angle-right float-right"></i>
                                  </h6>
                                   <div class="text-white rounded-0" style="background-color: rgb(231,233,240,0.096);border: 0px;">
                                      </div>
              
                                       <h6 class="pb-2 pt-2 text-white rounded-0 mt-2" style="background-color: rgb(231,233,240,0.096); border: 0px;"> 
                                          <span class="float-left "><i class="fas fa-briefcase "></i> &nbsp;
                                  Client</span>
                                  <i class="fas fa-angle-right float-right"></i>&nbsp;&nbsp 
                              </h6>
              
                              <div class="ml-0 mr-0 pr-0 pl-0" style="background-color: rgb(231,233,240,0.096); border: 0px">
                           <p class="ml-2"><i class="text-white fas fa-plus">&nbsp; &nbsp;Ajouter client</i></p>
                              <p class="ml-2"><i class="text-white fas fa-plus">&nbsp; &nbsp;Liste client</i></p>  
                          </div>
                        <h6 class="pb-2 pt-2 text-white rounded-0 mt-2" style="background-color: rgb(231,233,240,0.096); border: 0px;"> 
                          <span class="float-left ">  <i class="fas fa-hourglass"></i> &nbsp; 
                                  <label class="items">Travaux</label></span>
                                  <i class="fas fa-angle-right float-right"></i>
                              </h6>
                              <div class="text-white rounded-0" style="background-color: rgb(231,233,240,0.096);border: 0px;">
                              </div>
              
                              <h6 class="pb-2 pt-2 ml-0 text-white rounded-0 " style="background-color: rgb(231,233,240,0.096); border: 0px;">
                                  <span class="float-left"> <i class="fab fa-btc " class="offset-md-1"></i> <label class="items">OpérationBancaire</label></span> 
                                    
                                  <i class="fas fa-angle-right float-right mr-0"></i>
                              </h6>
                              <div class="text-white rounded-0"style="background-color: rgb(231,233,240,0.096);border: 0px; ">
                              </div>
              
                               <h6 class="pb-2 pt-2 text-white rounded-0 mt-2" style="background-color: rgb(231,233,240,0.096); border: 0px;">
                                  <span class="float-left "> <i class="fas fa-map-pin"></i> &nbsp; 
                                 Prestations </span>
                                  <i class="fas fa-angle-right float-right"></i>
                              </h6>
                              <div class="text-white rounded-0" style="background-color: rgb(231,233,240,0.096);border: 0px;">
                                
                              </div>
              
                </div>
    </div>
       
        <div class="col-md-10">
            <div class="row ">
                      <div class="  mt-3 mb-3 col-md-3 ">
                      <div class="text-primary pt-3 pb-3" style="background-color: #d9edf6;">
                         <center>
                              <i class="fas fa-link text-center fa-3x"></i> <br>
                         </center>
                      </div>

                      <div class="text-dark pb-3 pt-3 shadow">
                          <div><span class=" mb-5 mt-5">Employee</span>
                          
                          <span class=" float-right mr-2 mt-2 text-white bg-dark " style="border-radius: 30px;">&nbsp;&nbsp;11&nbsp;&nbsp;
                       
                      </span>
                      </div>
                      </div>
                      </div>
                         <div class="  mt-3 mb-3 col-md-3 ">
                      <div class="text-primary pt-3 pb-3" style="background-color: #f0ecec;">
                         <center>
                              <i class="fas fa-id-card-alt fa-3x"></i><br>
                         </center>
                      </div>
                      <div class="text-dark pb-3 pt-3 shadow">
                              <span class="col-md-2 mb-5 mt-5">Clients</span>
                              <span class=" float-right mr-2 mt-2 text-white bg-dark " style="border-radius: 30px;">&nbsp;&nbsp;141&nbsp;&nbsp;
                       
                              </span>
                              </div>
                          </div>
                          
                  
             </div>
                   
             </div>
    <script>
</template>

<script>
export default {
    name: 'Dashboard',
}
 $( function() {
             $( "#accordion" ).accordion({
                collapsible: true,
                    heightStyle:"content" 
                  });
                }  
                );
</script>

<style>
@import url('./vendor/fonts/css/all.min.css"');

    
</style>