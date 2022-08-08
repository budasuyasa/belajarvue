<script>

export default {
    data() {
        return {
            nama: "Dio",
            alamat: "Denpasar",
            show: false,
            ulang: 20,
            masukan: "",
            selected: ""
        };
    },
    methods: {
        gantiNama() {
            this.nama = "Agus";
            this.alamat = "Badung";
        }
    },
}
</script>

<template>
  <div id="utama" class="container">
     <h1>Halo apa kabar</h1>
     <p>Saya sedang belajar Vue</p>

     <span>Nama: {{ nama }}</span> <br>
     <span>Alamat: {{ alamat }}</span> 

     <button class="btn btn-info btn-sm" @click="gantiNama()">Ganti Nama</button>

     <p>
      {{ 5 + 3 }}
     </p>

     <div v-if="show == true">
        Kelihatan
     </div>

     <div v-else>
        Kelihatan 2
     </div>

     <div v-for="item in ulang">
        <input type="checkbox">
        <label>Halo</label>
     </div>

     <form class="form">
        <input type="text" v-model="masukan">
        <span>{{ masukan }}</span>

        <select class="form-control" v-model="selected">
          <option value="Laki-Laki">Laki</option>
          <option value="Perempuan">Perempuan</option>
          <option value="Lainnya">Lainnya</option>
        </select>
        {{ selected }}
     </form>

     <button class="btn btn-success">Mantap</button>


  </div>
</template>

<style>

#utama {
  font-family: 'Roboto', sans-serif;
}

</style>
