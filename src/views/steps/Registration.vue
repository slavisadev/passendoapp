<template>
  <div>
    <div class="row">
      <div class="col">
        <div class="headline">
          <h2>Main user settings</h2>
          <h3>Set the main user settings</h3>
        </div>
        <div class="field">
          <label for="first_name">First Name</label>
          <input v-model="registerData.first_name" class="form-control" type="text" id="first_name">
          <div class="invalid-feedback" :class="{'d-block' : errors.length > 0}">
            {{ getValidationMessage('first_name') }}
          </div>
        </div>
        <div class="field">
          <label for="last_name">Last Name</label>
          <input v-model="registerData.last_name" class="form-control" type="text" id="last_name">
          <div class="invalid-feedback" :class="{'d-block' : errors.length > 0}">
            {{ getValidationMessage('last_name') }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="headline">
          <h2>User Email</h2>
          <h3>Set the user email</h3>
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input v-model="registerData.email" class="form-control" type="email" id="email">
          <div class="invalid-feedback" :class="{'d-block' : errors.length > 0}">
            {{ getValidationMessage('email') }}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="headline">
          <h2>Log In Settings</h2>
          <h3>User login settings</h3>
        </div>
        <div class="field">
          <label for="username">Username</label>
          <input v-model="registerData.username" class="form-control" type="text" id="username">
          <div class="invalid-feedback" :class="{'d-block' : errors.length > 0}">
            {{ getValidationMessage('username') }}
          </div>
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input v-model="registerData.password" class="form-control" type="password" id="password">
          <div class="invalid-feedback" :class="{'d-block' : errors.length > 0}">
            {{ getValidationMessage('password') }}
          </div>
        </div>
        <div class="form-check field">
          <input v-model="registerData.send_password" class="form-check-input" type="checkbox" value=""
                 id="send_password">
          <label class="form-check-label" for="send_password">
            Send Random Password
          </label>
        </div>
        <div class="field text-right">
          <button @click="register" class="btn btn-default">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Registration from '@/views/steps/Registration.vue';
import Tags from '@/views/steps/Tags.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Registration',
  components: {
    Registration,
    Tags,
  },
  data() {
    return {
      registerData: {
        first_name: null,
        last_name: null,
        email: null,
        username: null,
        password: null,
        send_password: null,
      },
    };
  },
  computed: {
    ...mapGetters('register', [
      'isReady',
      'errors',
    ]),
  },
  methods: {
    getValidationMessage(key) {
      let message = this.errors.filter((item) => {
        return item.key === key;
      });
      if (message[ 0 ] !== undefined) {
        return message[ 0 ].value;
      }
      return '';
    },
    register() {
      this
        .$store
        .dispatch('register/validate', this.registerData);
      if (this.isReady) {
        this.$store.dispatch('register/execute', 2);
      }
    },
  },
};
</script>
