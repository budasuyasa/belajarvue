<script>
import TombolUtama from './TombolUtama.vue'
export default {
    props: ["judul","deskripsi"],
    components: {TombolUtama}

}
</script>
<template>
    <div class="card col-md-3 col-1 m-1">
        <div class="card-body">
            <h5 class="card-title">{{ judul }}</h5>
            <p class="card-text">{{ deskripsi }}</p>
            <TombolUtama label="Lihat Detail" />
        </div>
    </div>
</template>

<style>
    .card {
        padding: 2px !important; 
    }
    .card-body {
        padding: 2px !important;
    }
    .tombol-kanan {
        float: right;
        bottom: 1px;
    }
</style>