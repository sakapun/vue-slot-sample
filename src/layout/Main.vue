<template>
  <div>
    <slot></slot>
    <Dialog />
  </div>
</template>

<script>
import Dialog from '../components/Dialog'
export default {
  components: {
    Dialog
  }
}
</script>

<style>

</style>
