"use strict"

import { createStore } from "vuex"
import axios from "axios"
import Swal from "sweetalert2"
import router from "../router"

const tempurl = "http://localhost:3000"

const store = createStore({
    state :{
        isLogin : true,
        busses : []
    },
    mutations : {
        ADD_LOGIN(state, payload){
            state.isLogin = payload
        },
        SET_BUSSES(state, payload){
            state.busses = payload
        }
    },
    actions : {
        login({commit, state, dispatch}, payload){
            axios({
                method : "post",
                url : `${tempurl}/users/login`,
                data: payload
            })
                .then(({data})=>{
                    localStorage.setItem('token', data.payload)
                    router.push("/dashboard")
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
        },register({commit, state, dispatch}, payload){
            axios({
                method : "post",
                url: `${tempurl}/users/register`,
                data : payload
            })
                .then(({data})=>{
                    localStorage.setItem('token', data.payload)
                    router.push("/dashboard")
                    Swal.fire({
                        icon: 'success',
                        title: data.message,
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
                .catch(err=>{
                    console.log(err.response.data.message)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: err.response.data.message,
                    })
                })
        }, getBusses({commit, state, dispatch}, payload){
            axios({
                method : "GET",
                url : `${tempurl}/bus`,
                headers : {token : localStorage.getItem("token")}
            })
            .then(({data})=>{
                console.log(data)
                commit("SET_BUSSES", data.payload)
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