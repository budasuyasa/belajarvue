<script>
import axios from 'axios'
export default {
    // Siapkan variable untuk menampung data
    data() {
        return {
            data: [],
            error: []
        }
    },

    // Mendapatkan data dari server saat komponen dimount
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                console.log(response)
                // menyiapkan variabel untuk menampung array baru
                let arrayBaru = []
                // mengcopy array dari response ke array baru
                for(let i = 0; i < response.data.length; i++){
                    arrayBaru[i] = response.data[i]
                    //menghentikan proses copy jika jumlah sudah 20
                    if(i == 20){
                        break
                    }
                }
                // mengisi data dengan array baru
                this.data = arrayBaru
            })
    }
}
</script>
<template>
    <!-- Membuat halaman ada di tengah -->
    <div class="container">
        <h1>Photo</h1>

        <!-- Membuat row baru untuk pembungkus -->
        <div class="row">
            <div class="col-12">
                <!-- List photo -->
                <div class="row">
                    <!-- gunakan v-for untuk mengiterasi setiap item dalam variabel data -->
                    <!-- tambahkan attribute key dengan id item sebagai id -->
                    <div v-for="item in data" :key="item.id" class="card col-3" style="width: 18rem;">
                        <img :src="item.thumbnailUrl" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">{{ item.title }}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>