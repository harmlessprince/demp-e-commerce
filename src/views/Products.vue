<template>
  <div class="Products">
    {{msg}}
   <div class="row">
      <div class="col-md-3">
        <ul class="list-group">
          <li class="list-group-item"><router-link to="/admin/new">New Product</router-link></li>
        </ul>
      </div>
      <div class="col-md-9">
          
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Products",
  data(){
      return{
          msg: "Show All Products"
      }
  }
};
</script>

<style>
.list-group-item {
    position: relative;
    display: block;
    padding: .75rem 1.25rem;
    background-color: #007bff;
   
    border: 1px solid rgba(0,0,0,.125);
}

.list-group-item a{
   color:white;
   text-decoration: none;
}
</style>
