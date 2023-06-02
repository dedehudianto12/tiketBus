"use strict"

import { createStore } from "vuex"
import axios from "axios"
import Swal from "sweetalert2"
import router from "../router"

const tempurl = "http://localhost:3000"

const store = createStore({
    state :{
        islogin : true
    },
    mutations : {},
    actions : {
        login({commit, state, dispatch}, payload){
            axios({
                method : "post",
                url : `${tempurl}/users/login`,
                data: payload
            })
                .then(({data})=>{
                    localStorage.setItem('token', data.payload)
                    router.push("/about")
                    Swal.fire({
                        icon: 'success',
                        title: data.message,
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
                .catch(err=>{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: err.response.data.message,
                    })
                })
        }
    },
    getters : {}
})

export default store