<template>
  <label class="file-select">
    <div class="thumbnail">
        <span v-if="logo"><img :src="logo" alt="sponsor logo"/></span>
        <span v-if="logo" title="change logo"><i class="fa fa-edit fa-lg text-muted"></i></span>
        <span v-else><a class="btn btn-light">select logo</a></span>
    </div>
    <input type="file" @change="handleFileChange"/>
  </label>
</template>

<script>
export default {
    props: {
        value: String
    },
    data(){
        return{
            logo: this.value
        }
    },
    methods: {
        handleFileChange(e) {
            let ctl = this;
            let file = e.target.files[0];

            if(file){
                const reader = new FileReader();

                reader.addEventListener("load", function(){
                    ctl.logo = reader.result;
                    ctl.$emit('logo-changed', ctl.logo)
                }, false);

                reader.readAsDataURL(file);
            }
        }
    }
}
</script>

<style>
.file-select{
    width:100%;
    text-align: center;
}

.file-select i{
    vertical-align: bottom;
}

.file-select img{
    max-height: 75px;
}

.file-select > input[type="file"] {
  display: none;
}
</style>