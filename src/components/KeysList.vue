<template>
    <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-10">
            <br>
            <h1>Keys List</h1>
            <br>
            <table class="table">
                <tr>
                    <th>ID key</th>
                    <th>App Type</th>
                    <th>App Name</th>
                    <th>App Key</th>
                    <th>Max Users</th>
                    <th>Activation Days</th>
                    <th>Creation Date</th>
                    <th>Actions</th>
                </tr>
                <tbody>
                    <tr v-for="(k, index) in keys" :key="k.idkey">
                        <td>{{k.idkey}}</td>
                        <td>{{k.appType}}</td>
                        <td>{{k.appName}}</td>
                        <td>{{k.ackey}}</td>
                        <td>{{k.maxUsers}}</td>
                        <td>{{k.activationDays}}</td>
                        <td>{{k.creatinDate  | formatDate }}</td>
                        <td>    
                            <button @click="deleteKeyById(index,k.idkey)" class="btn btn-danger btn-sm" href="">Delete</button>
                            <router-link :to="`/EditKey/${k.idkey}`"><button class="btn btn-success btn-sm">Update</button></router-link>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-sm-1"></div>
    </div>
</template>
<script>
import axios from 'axios';


export default {
    name:"KeysList",
    data(){
        return{
            keys:[]
        }
    },
    mounted(){
        axios.get('https://springboot-vue-api.herokuapp.com/api')
        .then((rep)=>{
            this.keys=rep.data
        })
    },methods:{
        deleteKeyById(index,id){
            if(confirm("delete key with id :" + id + " ? ")){
                this.keys.splice(index, 1);
                axios.delete('https://springboot-vue-api.herokuapp.com/api/'+id,{
                    idkey:id
                })
            }
        }
    }
}
</script>