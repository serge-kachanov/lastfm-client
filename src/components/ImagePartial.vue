<template>
  <div>
    <img class="img-holder" :src="imageUrl">
  </div>
</template>

<script>

export default {
  name: 'ImagePartial',
  props: [
    'imageUrl'
  ]
}
</script>
