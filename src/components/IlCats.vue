<template>
  <div class="ilcats">
    <h1>Crazy cat lady PokeDex</h1>
    <img src="../assets/animals-cats-cute-45170.jpg" alt="Five cute baby cats in a row" width="800" height= auto>
    <h3>{{ message }}</h3>
    <input type="text" v-model="message">
    <button v-on:click="addCat()" class="btn btn-primary btn-sm">Add le kitteh</button>
    <p>I love cats</p>

    <ul>
      <li v-for="cat in cats">{{cat}}</li>
    </ul>
  </div>
</template>
  <script>
export default {
  name: "IlCats",
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