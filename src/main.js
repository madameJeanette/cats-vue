Vue.component("ilcats", {
  template: `
  
  <div class = "ilcats">
  <h1>{{ message }}</h1>
  <input type = "text" v-model="message">
  <button v-on:click="addCat()" class="btn btn-primary btn-sm">Add le kitteh</button>
  <p>I love cats</p>

  <ul>
    <li v-for="cat in cats">{{cat}}</li>
      </ul>
  </div>
  `,
  data() {
    return {
      message: " ",
      cats: ["Persian", "Spynx", "Ragdoll", "Vulisbakkie Sjaakie"]
    };
  },
  methods: {
    addCat: function() {
      var newCat = this.message.trim();
      if (!newCat) {
        return;
      }
      this.cats.push(newCat);
      this.message = "";
    }
  }
}),
  new Vue({
    el: "#app"
  });
