<template>
  <div class="mainpage">



    <div class="form">
      <input id="PlayerNameInput" placeholder="Player Name" v-model="playerName">
      <button id="SearchBtn" v-on:click="onClickSearch()">Search</button>
    </div>

    <div id="plrNm">{{ playerName }}</div>
<!--  <div id="plrUid">{{ playerUid }}</div>  -->

    <div id="coin">Coins: {{ bedwarsStats.coins }}</div>

    <div class="info">
      <div id="kills">Kills: {{ bedwarsStats.kills }}</div>
      <div id="deaths">Deaths: {{ bedwarsStats.deaths }}</div>
    </div>

  </div>

</template>

<script>
  // import Vue from 'vue'
  import HyCle from 'hypixel'
  import hypixelApi from '../assets/settings.json'
  const client = new HyCle( {key: hypixelApi.apiKey} )

  let playerData = []

  export default {
    name: 'MainPage',
    data: function() {
      return {
        playerName: '',
        playerUid: '',
        bedwarsStats: {
          coins: 0,
          kills: 0,
          deaths: 0
        }
      }

    },
    methods: {
      onClickSearch: function () {
        // playerData = []

        client.getPlayerByUsername(this.playerName, (err, player) => {
          playerData = player
          // this.playerUid = player.uuid
          this.bedwarsStats.coins = player.stats.Bedwars.coins
          this.bedwarsStats.kills = player.stats.Bedwars.kills_bedwars
          this.bedwarsStats.deaths = player.stats.Bedwars.deaths_bedwars
          if (err) {
            return console.info('Nope!')
          }
        })

        // this.bedwarsCoin = playerData.coins

        console.log(playerData)
        console.log('bedwarsCoins: ' + this.bedwarsStats.coins)
        console.log('player Name: ' + this.playerName)
        console.log('kills: ', this.bedwarsStats.kills)
        console.log('deaths: ', this.bedwarsStats.deaths)
      }
    }
  }

</script>

<style>
    body {
      background: #232326;
      margin: 0;
      padding: 0;
    }

    h1 {
      color: #c2c2d0;
      font-weight: bold;
    }
    h3 {
      color: #c2c2d0;
      font-weight: normal;
    }

    .form {
      display: flex;
      justify-content: center;
      margin: 20px;
    }

    #PlayerNameInput {
      position: relative;
      background: #42434b;
      color: #c2c2d0;
      font-size: 25px;
      border: none;
      border-radius: 5px;
      outline: none;
      width: 230px;
      height: 70px;
      margin: 10px;
      padding-left: 20px;
    }

    #SearchBtn {
      position: relative;
      background: #42434b;
      color: #c2c2d0;
      font-size: 25px;
      border: none;
      border-radius: 5px;
      outline: none;
      width: 170px;
      height: 70px;
      margin: 10px;
    }

    .info {
      display: flex;
      justify-content: center;
      font-size: 40px;
    }

    #coin {
      color: #c2c2d0;
      margin: 20px;
      font-size: 30px;
    }

    #plrNm {
      color: #f0f8ff;
      font-weight: bold;
    }

    #kills {
      color: #f0f8ff;
      font-size: 30px;
      margin: 10px;
    }
    #deaths {
      color: #f0f8ff;
      font-size: 30px;
      margin: 10px;
    }
</style>
