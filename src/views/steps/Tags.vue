<template>
  <div>
    <div class="row">
      <div class="col">
        <h3>User tags are listed bellow</h3>
        <ul id="tags">
          <li v-for="tag in getTags">{{ tag }}</li>
        </ul>
      </div>
      <div class="col">
        <a href="#" @click.prevent="showTagField = !showTagField">+ Add Tag</a>
        <div v-if="showTagField">
          <input
            placeholder="Type the tag you want and press Enter"
            type="text"
            v-model="inputTag"
            class="form-control"
            @keyup.enter="addTag">
          <ul id="created-tags">
            <li><a href="#" @click.prevent="addAll">all</a></li>
            <li v-for="tag in inputTags">
              {{ tag }} <span
              @click="addTagToUser(tag)"
            >add to user</span> <span @click="removeTag(tag)" class="remove">remove</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';

export default {
  name: 'Tags',
  components: {},
  data() {
    return {
      tags: [],
      inputTags: [],
      showTagField: false,
      inputTag: null,
    };
  },
  computed: {
    ...mapGetters('tags', [
      'getTags',
    ]),
  },
  methods: {
    addTag() {
      this.inputTags.push(this.inputTag);
      this.inputTag = null;
    },
    addTagToUser(tag) {
      this.$store.dispatch('tags/addToUser', tag);
    },
    removeTag(tag) {
      let index = this.inputTags.indexOf(tag);
      this.inputTags.splice(index, 1);
    },
    addAll() {
      this.inputTags.forEach((tag) => {
        this.$store.dispatch('tags/addToUser', tag);
      });
    },
  },
};
</script>
