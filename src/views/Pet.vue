<template>
  <div>
    <h1>{{ pets().name }} ({{$route.params.species}})</h1>
    <p>Age: {{ pets().age }} years </p>
    <p>Breed: {{ pets().breed }}</p>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  methods: {
    pets () {
      var animal = this[this.$route.params.species][this.$route.params.id]
      return animal
    }
  },
  mounted () {
    console.log(this[this.$route.params.species][this.$route.params.id])
  }
}
</script>
