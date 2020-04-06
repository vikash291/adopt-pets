<template>
  <div class="home">
  <h2>Home</h2>
    <button class="btn btn-primary small" @click="toggleAddForm"> Add Pet </button>
    <b-form @submit.prevent="submitPet" @reset="onReset" v-if="showPetForm">
      <b-form-group id="input-group-2" label="Pet Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-1" label="Pet Age:" label-for="input-2">
        <b-form-input
          id="input-1"
          type="number"
          v-model="form.age"
          required
          placeholder="Enter Age"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      showPetForm: false,
      form: {
        name: null,
        age: null,
        species: null
      }
    }
  },
  components: {
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    toggleAddForm () {
      this.showPetForm = !this.showPetForm
    },
    submitPet () {
      const payload = {
        species: this.form.species,
        pet: {
          name: this.form.name,
          age: this.form.age
        }
      }
      this.addPet(payload)
      this.onReset()
    },
    onReset () {
      this.form = {
        name: null,
        age: null,
        species: ''
      }
    }
  }
}
</script>
