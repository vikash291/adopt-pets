<template>
  <div>
    <PetTable species="dogs" :pets="dogs"></PetTable>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PetTable from '../components/PetTable'
export default {
  components: { PetTable },
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>

<style>

</style>
