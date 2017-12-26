<template>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
        <router-link to="/" class="navbar-brand">Stocktrader</router-link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link to="/portfolio" class="nav-link">Portfolio</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/stocks" class="nav-link">Stocks</router-link>
                </li>
            </ul>
        </div>
        <div class="btn-group">
            <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Save & Load
            </button>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Save Data</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Load Data</a>
            </div>
        </div>
        <button class="btn btn-outline-success my-2 my-sm-0">End Day</button>
    </nav>
    
</template>

<script>
    export default {
        name: 'my-header'
    }
</script>

<style>
    button {
        margin: 0 10px;
    }
</style>
