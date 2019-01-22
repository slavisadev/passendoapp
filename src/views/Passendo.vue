<template>
  <div>
    <div class="container divider">
      <div class="row">
        <div class="col">
          <a href="#" @click.prevent="goTo(1)" class="step" :class="{'active' : currentStep === 1}">
            <em>1</em>
            <i>Basic user settings</i>
          </a>
        </div>
        <div class="col">
          <a href="" @click.prevent="goTo(2)" class="step" :class="{'active' : currentStep === 2}">
            <em>2</em>
            <i>Tags</i>
          </a>
        </div>
      </div>
    </div>
    <div class="container">
      <Registration v-if="currentStep === 1"></Registration>
      <Tags v-if="currentStep === 2"></Tags>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Registration from '@/views/steps/Registration.vue';
import Tags from '@/views/steps/Tags.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    Registration,
    Tags,
  },
  computed: {
    ...mapGetters('steps', [
      'currentStep',
    ]),
  },
  data() {
    return {};
  },
  methods: {
    goTo(step) {
      this.$store.dispatch('steps/setStep', step);
    },
  },
};
</script>
