<script>
import Kartu from './components/Kartu.vue'
import TombolUtama from './components/TombolUtama.vue'
export default {
    components: { Kartu, TombolUtama }
}
</script>
<template>
    <div class="container">
        <h1>Menu Restoran</h1>

        <div class="row">
            <div class="col-3">
                Sidebar
            </div>
            <div class="col-8 row" id="konten">
                <Kartu judul="Soto Ayam" deskripsi="Kaldu, toge, ayam dan lontong "/>
                <Kartu judul="Nasi Goreng" deskripsi="Nasi yang digoreng" />
                <Kartu judul="Nasi Padang" deskripsi="Nasi lemak enak berenergi"/>
                <Kartu judul="Es Buah" deskripsi="Es dengan buah enak"/>
                <Kartu judul="Es Teh" deskripsi="Es dicampur teh"/>
                <Kartu judul="Kopi" deskripsi="Kopi dengan air"/>
            </div>
            <TombolUtama label="Halo" />
        </div>
    </div>
</template>