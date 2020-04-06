<template>
  <div>
    <PetTable species="cats" :pets="cats"></PetTable>
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
      'cats'
    ])
  },
  mounted () {
  }
}
</script>
