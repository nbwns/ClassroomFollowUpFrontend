<template>
    <div>
        <h2>{{data.trainer}} pour {{data.training}}</h2>
        <small>Le {{data.date}}</small>
        <p>
            {{data.description}}
        </p>
    </div>
</template>

<script>
export default {
    props: ["data"]
}
</script>

<style>

</style>
