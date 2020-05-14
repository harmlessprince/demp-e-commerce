<template>
  <div class="product_form">
    <div class="card">
      <div class="card-body">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form action="POST" @submit.prevent="handleSubmit(createProduct)">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="">Name</label>
                <TextInput
                  v-model="name"
                  name="Product Name"
                  rules="required|alpha"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="">Image</label>
                <TextInput
                  v-model="image"
                  name="Image File"
                  rules="required|image"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="">Price</label>
                <TextInput
                  v-model="price"
                  name="Product Price"
                  rules="required|numeric"
                />
                <label for="">Manufacturer</label>
                <TextInput
                  v-model="manufacturer"
                  name="Manufacturer Name"
                  rules="required|alpha"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="">Description</label>
                <ValidationProvider
                  name="description"
                  rules="required|alpha_num"
                  v-slot="{ errors }"
                >
                  <textarea v-model="description" class="form-control" rows="4"></textarea>
                  <p class="text-danger" role="alert">{{ errors[0] }}</p>
                </ValidationProvider>
              </div>
            </div>

            <button type="submit" class="btn btn-primary">Add Product</button>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "@/components/TextInput";
export default {
  name: "Productform",
  components: {
    TextInput,
  },
  data() {
    return {
      name: '',
      image:null,
      price: '',
      manufacturer:'',
      description: ''
    };
  },
  methods: {
    createProduct() {
      console.log("clicked");
    },
  },
};
</script>
<style>
span {
  display: block;
  /* color:red; */
}
</style>
