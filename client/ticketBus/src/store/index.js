"use strict"

import { createStore } from "vuex"
import axios from "axios"
import Swal from "sweetalert2"
import router from "../router"

const tempurl = "http://localhost:3000"

const store = createStore({
    state :{
        isLogin : true,
        busses : [],
        bus : [],
        pendings : []
    },
    mutations : {
        ADD_LOGIN(state, payload){
            state.isLogin = payload
        },
        SET_BUSSES(state, payload){
            state.busses = payload
        },
        SET_BUS(state, payload){
            state.bus = payload
        },
        SET_PENDING(state, payload){
            state.pendings = payload
        }
    },
    actions : {
        loginAdmin({commit, state, dispatch}, payload){
            axios({
                method : "post",
                url : `${tempurl}/admins/login`,
                data: payload
            })
            .then(({data})=>{
                localStorage.setItem('admin_token', data.payload)
                router.push("/admin/bus")
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
        },
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
                commit("SET_BUSSES", data.payload)
            })
            .catch(err=>{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.response.data.message,
                })
            })
        }, getBus({commit, state, dispatch}, payload){
            axios({
                method : "GET",
                url : `${tempurl}/bus/${payload}`,
                headers : {token : localStorage.getItem("token")}
            })
            .then(({data})=>{
                console.log(data)
                commit("SET_BUS", data.payload)
            })
            .catch(err=>{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.response.data.message,
                })
            })
        }, addPendingBus({commit, state, dispatch}, payload){
            axios({
                method : "post",
                url: `${tempurl}/bus/${payload[0]}/pending`,
                data : {bangku: payload[1]},
                headers : {token: localStorage.getItem("token")}
            })
            .then(({data})=>{
                commit("SET_PENDING", data.payload)
                router.push("/dashboard")
                Swal.fire({
                    icon: 'success',
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1500
                })
            }).catch(err=>{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.response.data.message,
                })
            })
        },
         addBus({commit, state, dispatch}, payload){
            axios({
                method : "post",
                url: `${tempurl}/admins/createBus`,
                data : payload,
                headers : {token: localStorage.getItem("admin_token")}
            })
            .then(({data})=>{
                let temp = state.busses
                temp.push(data.payload)
                commit("SET_BUSSES", temp)
                Swal.fire({
                    icon: 'success',
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1500
                })
            }).catch(err=>{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.response.data.message,
                })
            })
         },
         deleteBus({commit, state, dispatch}, payload){
            axios({
                method : "delete",
                url: `${tempurl}/admins/${payload}`,
                data : payload,
                headers : {token: localStorage.getItem("admin_token")}
            })
            .then(({data})=>{
                let temp = state.busses.filter(el => {
                    return el._id !== payload
                  })
                commit("SET_BUSSES", temp)
            })
            .catch(err=>{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.response.data.message,
                })
            })
         },
         updateBus({commit, state,dispatch}, payload){
            axios({
                method : "patch",
                url: `${tempurl}/admins/${payload[1]}`,
                data : payload[0],
                headers : {token: localStorage.getItem("admin_token")}
            })
            .then(({data})=>{
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
         },
         getPendings({commit, state,dispatch}, payload){
            axios({
                method : "get",
                url: `${tempurl}/admins/pending`,
                headers : {token: localStorage.getItem("admin_token")}
            })
            .then(({data})=>{
                commit("SET_PENDING", data.payload)
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
         }, updatePending({commit, state, dispatch}, payload){
            axios({
                method : "patch",
                url: `${tempurl}/admins/pending/${payload}`,
                headers : {token: localStorage.getItem("admin_token")}
            })
            .then(({data})=>{
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