<template>
  <div class="mainpage">



    <div class="form">
      <input id="PlayerNameInput" placeholder="Player Name" v-model="playerName">
      <button id="SearchBtn" v-on:click="onClickSearch()">Search</button>
    </div>

    <div id="plrNm">{{ playerName }}</div>
<!--  <div id="plrUid">{{ playerUid }}</div>-->

    <div id="coin">Coins: {{ bedwarsStats.coins }}</div>

    <div class="info">
      <div class="killInfo">
        <div id="kills">Kills: {{ bedwarsStats.kills }}</div>
        <div id="deaths">Deaths: {{ bedwarsStats.deaths }}</div>
      </div>
      <div class="final">
        <div id="final_kills">Final Kills: {{ bedwarsStats.final_kills }}</div>
        <div id="final_deaths">Final Deaths: {{ bedwarsStats.final_deaths }}</div>
      </div>
      <div class="win_lose">
        <div id="wins">Win: {{ bedwarsStats.win }}</div>
        <div id="loses">Lose: {{ bedwarsStats.lose }}</div>
      </div>
      <div class="beds">
        <div id="broken_beds">Broken Beds: {{ bedwarsStats.broken_beds }}</div>
        <div id="lose_beds">Lost Beds: {{ bedwarsStats.lost_beds }}</div>
      </div>

    </div>`




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
          deaths: 0,
          broken_beds: 0,
          lost_beds: 0,
          win: 0,
          lose: 0,
          final_kills: 0,
          final_deaths: 0
        },
        skywarsStats: {
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
          playerData = player.stats.Bedwars
          // this.playerUid = player.uuid
          this.bedwarsStats.coins = player.stats.Bedwars.coins
          this.bedwarsStats.kills = player.stats.Bedwars.kills_bedwars
          this.bedwarsStats.deaths = player.stats.Bedwars.deaths_bedwars
          this.bedwarsStats.broken_beds = player.stats.Bedwars.beds_broken_bedwars
          this.bedwarsStats.lost_beds = player.stats.Bedwars.beds_lost_bedwars
          this.bedwarsStats.win = player.stats.Bedwars.wins_bedwars
          this.bedwarsStats.lose = player.stats.Bedwars.losses_bedwars
          this.bedwarsStats.final_kills = player.stats.Bedwars.final_kills_bedwars
          this.bedwarsStats.final_deaths = player.stats.Bedwars.final_deaths_bedwars

          this.skywarsStats.coins = player.stats.SkyWars.coins
          this.skywarsStats.kills = 1
          this.skywarsStats.deaths = 1

          if (err) {
            return console.info('Nope!')
          }
        })

        // this.bedwarsCoin = playerData.coins

        console.log(playerData)

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
      font-size: 30px;
      color: #f0f8ff;
    }

    #coin {
      color: #f0f8ff;
      margin: 10px;
      font-size: 35px;
    }

    #plrNm {
      color: #f0f8ff;
      font-weight: bold;
    }

    #kills {
      color: #f0f8ff;
      margin: 10px;
    }
    #deaths {
      color: #f0f8ff;
      font-size: 30px;
      margin: 10px;
    }
    #final_kills  {
      color: #f0f8ff;
      font-size: 30px;
      margin: 10px;
    }
    #final_deaths {
      color: #f0f8ff;
      font-size: 30px;
      margin: 10px;
    }
    #wins {
      color: #f0f8ff;
      font-size: 30px;
      margin: 10px;
    }
    #loses {
      color: #f0f8ff;
      font-size: 30px;
      margin: 10px;
    }
    #broken_beds {
      color: #f0f8ff;
      font-size: 30px;
      margin: 10px;
    }
    #lose_beds {
      color: #f0f8ff;
      font-size: 30px;
      margin: 10px;
    }

    .killInfo {
      display: flex;
      justify-content: center;
      margin: 10px;
    }
    .final {
      display: flex;
      justify-content: center;
      margin: 10px;
    }
    .win_lose {
      display: flex;
      justify-content: center;
      margin: 10px;
    }
    .beds {
      display: flex;
      justify-content: center;
      margin: 10px;
    }
</style>
