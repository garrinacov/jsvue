<template>
  <div>
    <app-menu></app-menu>
    <router-view/>
    <app-footer></app-footer>
  </div>       
</template>

<script>
import AppFooter from './AppFooter'
import AppMenu from './AppMenu'

export default {
  components:{AppFooter,AppMenu}
}
</script>