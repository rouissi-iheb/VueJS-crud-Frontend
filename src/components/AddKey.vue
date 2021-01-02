<template>
    <div class="row">
        
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
            <br>
            <br>
            <center><h3>Add New Key</h3></center>
            <br><br>
            <form>
                <div class="form-group">
                    <input type="text" v-model="key.appType" placeholder="App Type" class="form-control">
                </div>
                <div class="form-group">
                    <input type="text" v-model="key.appName" placeholder="App Name" class="form-control">
                </div>
                <div class="form-group">
                    <input type="text" v-model="key.ackey" placeholder="Licence Key" class="form-control">
                </div>
                <div class="form-group">
                    <input type="text" v-model="key.maxUsers" placeholder="Max Users" class="form-control">
                </div>
                <div class="form-group">
                    <input type="text" v-model="key.activationDays" placeholder="Activation Days" class="form-control">
                </div>
                <div class="form-group">
                    <input type="date" v-model="key.creatinDate" placeholder="Creation Date" class="form-control">
                </div>
                <div class="form-group">
                    <br><br>
                    <center><button @click="addKey" class="btn btn-success">Add New Key</button></center>
                </div>
            </form>
        </div>
        <div class="col-sm-3"></div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name:"AddKey",
    data(){
        return {
            key:{
                appType: "",
                appName: "",
                maxUsers: "",
                activationDays:"" ,
                creatinDate: "",
                categorie: null,
                ackey: ""
            }
        }
    },methods:{
        addKey(){
            axios.post('https://springboot-vue-api.herokuapp.com/api',this.key).then((rep)=>{
                console.log(rep);
                window.location("/KeysList")
            })
            
        }
    }
}
</script>