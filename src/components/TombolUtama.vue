<script>
export default {
    props: ["label"]
}
</script>
<template>
    <Button class="tombol-utama">{{ label }}</Button>
</template>

<style>
.tombol-utama {
    padding: 1rem;
    color: white;
    background: linear-gradient(90deg, #C84E89 0%, #F15F79 100%);
    box-shadow: 0px 4px 4px rgba(163, 163, 163, 0.25);
    border-radius: 6px;
    border: none;
}
</style>