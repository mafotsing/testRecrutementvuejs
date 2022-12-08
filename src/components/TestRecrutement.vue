<template>
<body style="background-color:rgb(233, 233, 233);">
    <div class="row ml-5">
    <h1>BIENVENNUE DANS LE SYSTEME D'AUTORISATIONS</h1>
    </div>
 <div class="container mt-5 pt-5 d-flex justify-content-center">
<div class="col-'md-5 p-4 pb-4 bg-white">
    <form>
        <div class="row mb-5 " style="background-color: rgb(226, 230,234);">
        <div class="col-md-4"></div>
        <div class="col-md-4">
             <div class="row ">
                        <h2 class="text-success ">
                        <b>
                           <span class="fa fa-user"></span>
                           login
                        </b>
                        </h2>
             </div>
        </div>
         <div class="col-md-4"></div>
         </div>
        <div class="formgroup row">
            <label class= "col-md-4 col-form-label"  for="user_login">login:</label>
            <input type="text" class="col-md-8 form-control"  placeholder="Entrer Email" id="user_login"/>
        </div>
         <div class="formgroup row">
            <label class= "col-md-4 col-form-label"  for="user_password">passeword:</label>
            <input type="text"  class="col-md-8 form-control" placeholder="Entrer passeword" id="user_password"/>
        </div>
          <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-8">
                        <button type="button" class="btn btn-danger  ">Cancel</button>
                   <button type="button" class="btn  btn-success mr-2">connect</button>
                    </div>
                    <div class="col-md-3"></div>
         </div>
    </form>
</div>
 </div>
</body>
</template>

<script>
export default {
   

}
</script>

<style>

</style>