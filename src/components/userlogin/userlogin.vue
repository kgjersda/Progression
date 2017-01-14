<template>
    <div id="userlogin">
        <div v-if="user.username !== undefined">
            User logged in as {{ user.username }}
        </div>
        <div v-if="user.username === undefined">
            User not logged in
        </div>
    </div>
</template>
<script>
    import {
        mapMutations
    } from 'vuex'

    export default {
        name: 'userlogin',
        props: ['user'],

    }
</script>