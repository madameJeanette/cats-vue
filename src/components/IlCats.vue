<template>
  <div class="ilcats">
    <h1>Crazy cat lady PokeDex</h1>
    <img
      src="../assets/animals-cats-cute-45170.jpg"
      alt="Five cute baby cats in a row"
      width="800"
      height="auto"
    >
    <h3>{{ message }}</h3>
    <input type="text" v-model="message">
    <button v-on:click="addCat()">Add le kitteh</button>
    <button @click="removeCat(n)">Remove</button>
    <p>I love cats</p>

    <ul>
      <li v-for="(cat, n) in cats">{{cat}}</li>
    </ul>
  </div>
</template>
  <script>
export default {
  name: "IlCats",
  data() {
    return {
      message: null,
      cats: ["Persian", "Spynx", "Ragdoll", "Vulisbakkie Sjaakie"]
    };
  },
  mounted() {
    if (localStorage.getItem("cats")) {
      try {
        this.cats = JSON.parse(localStorage.getItem("cats"));
      } catch (e) {
        localStorage.removeItem("cats");
      }
    }
  },

  methods: {
    addCat: function() {
      var newCat = this.message.trim();
      if (!newCat) {
        return;
      }
      this.cats.push(newCat);
      this.message = "";
      this.saveCats();
    },
    removeCat(x) {
      this.cats.splice(x, 1);
      this.saveCats();
    },
    saveCats() {
      const parsed = JSON.stringify(this.cats);
      localStorage.setItem("cats", parsed);
    }
  }
};
</script>
<style scoped>
h1,
h2 {
  font-weight: normal;
}
h3 {
  color: #42b983;
}
p {
  font-weight: bold;
}
ul {
  list-style-type: none;
  padding: 0;
  color: #42b983;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>