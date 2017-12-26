<template>
    <div class="contianer">
        <app-header></app-header>
        <div class="row">
            <div class="col-xs-12">
                <router-view class="container main-area"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header'
    export default {
        components: {
            appHeader: Header
        }
    }  
</script>

<style>
</style>
