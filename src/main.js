Vue.component("message", {
  template: `
  <div class = "message">
    <h1>{{ message }}</h1>
    <input v-model="message">
    <button v-on:click="">Add le kitteh</button>
  </div>
  `,
  data(){
    return {
    message: "Sokken"
  }
}
})

Vue.component("ilcats", {
  props:["message"],
  template: `
  <div class = "ilcats">
  <p>I love cats</p>

  <ul>
    <li v-for="cat in cats">{{cat}}</li>
    <li {{message.input}}</li>
    
  </ul>
  </div>
  `,
  data(){
    return {
      cats:["Persian", "Spynx", "Ragdoll", "Vulisbakkie Sjaakie"]
    }
     
}})

var app = new Vue({
  el:"#app"
  })
