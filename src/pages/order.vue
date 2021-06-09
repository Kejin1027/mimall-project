<template>
    <div>
        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavFooter from '../components/NavFooter'
import ServiceBar from '../components/ServiceBar.vue'

export default {
    name: 'order',
    data() {
        return {
          title: '',
          tips: ' '
        }
    },
    components: {
        ServiceBar,
        NavFooter
    },
    mounted() {
    },
}
</script>