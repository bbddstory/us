<template>
  <!-- <div style="height: 3000px;background: gray;">
    <h1>{{ title }}</h1>
  </div> -->
  <masonry :cols="3" :gutter="6">
    <div v-for="(item, index) in items" :key="index">
      <!-- <div class="img-div" :style="'height: 114px;background: url(' + item + ') 50% no-repeat;background-size: cover;border: 5px solid #fff;box-sizing: border-box;'"></div> -->
      <img alt="N/A" style="width: 100%;max-width: 100%;border: 5px solid #fff;box-sizing: border-box;margin-bottom: 6px;" :src="item">
    </div>
  </masonry>
</template>

<script>
export default {
  name: "masonry-comp",
  data: () => ({
      title: "Masonry Component",
      items: [
        'https://m.media-amazon.com/images/M/MV5BMjE2MTE2MjI3NV5BMl5BanBnXkFtZTgwNTc4NjU5NTM@._V1_SY1000_CR0,0,685,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNzI3OTk1MTcyM15BMl5BanBnXkFtZTgwMzI1NjU5NTM@._V1_SY1000_CR0,0,702,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTg4ODg1NjUyNV5BMl5BanBnXkFtZTgwNDM0NjU5NTM@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjM4OTQzOTIxNl5BMl5BanBnXkFtZTgwMzU0NjU5NTM@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTk4MjMyODAxMV5BMl5BanBnXkFtZTgwNTA1NjU5NTM@._V1_SY1000_CR0,0,1432,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjA1ODk5NjcxNF5BMl5BanBnXkFtZTgwNTI3MTU5NTM@._V1_SY1000_CR0,0,1517,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjQ0NDExOTEzNl5BMl5BanBnXkFtZTgwMDQ3MTU5NTM@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTk0NDU5NzA2Ml5BMl5BanBnXkFtZTgwMDQ4ODc3NDM@._V1_SY1000_CR0,0,705,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMmE2M2I4MWYtM2NiOC00OGM0LTllNWQtZDhlMjNlNjg5NzUwXkEyXkFqcGdeQXVyNjczMDc2NDQ@._V1_SY1000_SX1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMzAxNTY3ODg0NF5BMl5BanBnXkFtZTgwMjk2Njk5NDM@._V1_SX1777_CR0,0,1777,937_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNDg1NDYyNjUxNV5BMl5BanBnXkFtZTgwMTAwNjQxMzI@._V1_SY1000_SX1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTQ2MTgyNzY2MV5BMl5BanBnXkFtZTgwOTA5MjkxNjE@._V1_SY1000_CR0,0,1502,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMGE2NTU5MjctMzYyNy00YjdjLWEwOGItOWNhZTQ2ZTZjY2Q0XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg',
        'https://m.media-amazon.com/images/M/MV5BZWUyMWVlMjEtNjRkYS00YjNlLThmODItYzc1MTQ5NzBiOGM2XkEyXkFqcGdeQXVyNjY5NDczMTk@._V1_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjI5OTcwMzIyNF5BMl5BanBnXkFtZTgwNjMxNDMzMTI@._V1_SY1000_CR0,0,1333,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjQwNTgxMTEwNl5BMl5BanBnXkFtZTgwNDc4MjkzNTM@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjI3OTA3NjQ0M15BMl5BanBnXkFtZTgwMDQ0MDg3NDM@._V1_.jpg',
        'https://m.media-amazon.com/images/M/MV5BOTI5MjMyMDIxMF5BMl5BanBnXkFtZTgwODAxMjgwNDI@._V1_SY1000_CR0,0,1502,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTkxNTc3ODE3NF5BMl5BanBnXkFtZTgwMjMzNjY5NTM@._V1_SY1000_CR0,0,1454,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNzgxOTUxNDE0N15BMl5BanBnXkFtZTgwMDMzNjY5NTM@._V1_SY1000_CR0,0,665,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTg3OTI3NTM0N15BMl5BanBnXkFtZTgwMjIzNjY5NTM@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjQ0MjgxMjgyMl5BMl5BanBnXkFtZTgwNjEzNjY5NTM@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTYxMjY2NDI4N15BMl5BanBnXkFtZTgwNTY4MTU5NTM@._V1_SY1000_CR0,0,1489,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTY1OTgxMDIwM15BMl5BanBnXkFtZTgwNzY4MTU5NTM@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTgyMjMyOTc4Ml5BMl5BanBnXkFtZTgwODY4MTU5NTM@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTYxNTE4ODc1OF5BMl5BanBnXkFtZTgwMzc4MTU5NTM@._V1_SY1000_CR0,0,1478,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTk0Njc3ODM0Nl5BMl5BanBnXkFtZTgwNDc4MTU5NTM@._V1_SY1000_CR0,0,678,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjM2Mzc1MTc3MF5BMl5BanBnXkFtZTgwNjg2OTQ5NTM@._V1_SY1000_CR0,0,1474,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjE1NjQ2NDU0M15BMl5BanBnXkFtZTgwOTAzNjY5NTM@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTUzNDgyMjQyNV5BMl5BanBnXkFtZTgwNjAzNjY5NTM@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTY3MTEwOTI5NF5BMl5BanBnXkFtZTgwNTAzNjY5NTM@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMzI3OTE2MDM3N15BMl5BanBnXkFtZTgwMjEzNDY5NTM@._V1_SY1000_CR0,0,619,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTUzNTQwOTY5Nl5BMl5BanBnXkFtZTgwODIzMDY5NTM@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjAxMzYwNDExM15BMl5BanBnXkFtZTgwMTkyMDY5NTM@._V1_SY1000_CR0,0,700,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTg5ODE2OTIwMF5BMl5BanBnXkFtZTgwNTE3MTU5NTM@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTA4NzUyNTYyMzdeQTJeQWpwZ15BbWU4MDcxNzE1OTUz._V1_SY1000_CR0,0,666,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNTQ5OTA5OTk3OF5BMl5BanBnXkFtZTgwODE3MTU5NTM@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjQ5Nzk4NjQ5N15BMl5BanBnXkFtZTgwMTYxMDY5NTM@._V1_SY1000_CR0,0,703,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTU4ODgxMzQ0OF5BMl5BanBnXkFtZTgwNzYxMDY5NTM@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNjIwMDkwOTUwMl5BMl5BanBnXkFtZTgwMTcxMDY5NTM@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTUzMzkyNDE2Ml5BMl5BanBnXkFtZTgwMjcxMDY5NTM@._V1_SY1000_CR0,0,1439,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNzIyMzk2NDcxMF5BMl5BanBnXkFtZTgwMDkyMDY5NTM@._V1_SY1000_SX1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTU4OTA0ODEyNV5BMl5BanBnXkFtZTgwOTgyMDY5NTM@._V1_SY1000_CR0,0,679,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTYyOTY2MDEyN15BMl5BanBnXkFtZTgwNjgyMDY5NTM@._V1_SY1000_CR0,0,673,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNjAwMDkzNzI1OF5BMl5BanBnXkFtZTgwOTcyMDY5NTM@._V1_SY1000_SX1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNDk5Mjk0MDQ5N15BMl5BanBnXkFtZTgwNDcxMDY5NTM@._V1_SY1000_CR0,0,1348,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjE2MTE2MjI3NV5BMl5BanBnXkFtZTgwNTc4NjU5NTM@._V1_SY1000_CR0,0,685,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNzI3OTk1MTcyM15BMl5BanBnXkFtZTgwMzI1NjU5NTM@._V1_SY1000_CR0,0,702,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTg4ODg1NjUyNV5BMl5BanBnXkFtZTgwNDM0NjU5NTM@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjM4OTQzOTIxNl5BMl5BanBnXkFtZTgwMzU0NjU5NTM@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTk4MjMyODAxMV5BMl5BanBnXkFtZTgwNTA1NjU5NTM@._V1_SY1000_CR0,0,1432,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjA1ODk5NjcxNF5BMl5BanBnXkFtZTgwNTI3MTU5NTM@._V1_SY1000_CR0,0,1517,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjQ0NDExOTEzNl5BMl5BanBnXkFtZTgwMDQ3MTU5NTM@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTk0NDU5NzA2Ml5BMl5BanBnXkFtZTgwMDQ4ODc3NDM@._V1_SY1000_CR0,0,705,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMmE2M2I4MWYtM2NiOC00OGM0LTllNWQtZDhlMjNlNjg5NzUwXkEyXkFqcGdeQXVyNjczMDc2NDQ@._V1_SY1000_SX1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMzAxNTY3ODg0NF5BMl5BanBnXkFtZTgwMjk2Njk5NDM@._V1_SX1777_CR0,0,1777,937_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNDg1NDYyNjUxNV5BMl5BanBnXkFtZTgwMTAwNjQxMzI@._V1_SY1000_SX1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTQ2MTgyNzY2MV5BMl5BanBnXkFtZTgwOTA5MjkxNjE@._V1_SY1000_CR0,0,1502,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMGE2NTU5MjctMzYyNy00YjdjLWEwOGItOWNhZTQ2ZTZjY2Q0XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg',
        'https://m.media-amazon.com/images/M/MV5BZWUyMWVlMjEtNjRkYS00YjNlLThmODItYzc1MTQ5NzBiOGM2XkEyXkFqcGdeQXVyNjY5NDczMTk@._V1_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjI5OTcwMzIyNF5BMl5BanBnXkFtZTgwNjMxNDMzMTI@._V1_SY1000_CR0,0,1333,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjQwNTgxMTEwNl5BMl5BanBnXkFtZTgwNDc4MjkzNTM@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjI3OTA3NjQ0M15BMl5BanBnXkFtZTgwMDQ0MDg3NDM@._V1_.jpg',
        'https://m.media-amazon.com/images/M/MV5BOTI5MjMyMDIxMF5BMl5BanBnXkFtZTgwODAxMjgwNDI@._V1_SY1000_CR0,0,1502,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTkxNTc3ODE3NF5BMl5BanBnXkFtZTgwMjMzNjY5NTM@._V1_SY1000_CR0,0,1454,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNzgxOTUxNDE0N15BMl5BanBnXkFtZTgwMDMzNjY5NTM@._V1_SY1000_CR0,0,665,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTg3OTI3NTM0N15BMl5BanBnXkFtZTgwMjIzNjY5NTM@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjQ0MjgxMjgyMl5BMl5BanBnXkFtZTgwNjEzNjY5NTM@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTYxMjY2NDI4N15BMl5BanBnXkFtZTgwNTY4MTU5NTM@._V1_SY1000_CR0,0,1489,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTY1OTgxMDIwM15BMl5BanBnXkFtZTgwNzY4MTU5NTM@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTgyMjMyOTc4Ml5BMl5BanBnXkFtZTgwODY4MTU5NTM@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTYxNTE4ODc1OF5BMl5BanBnXkFtZTgwMzc4MTU5NTM@._V1_SY1000_CR0,0,1478,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTk0Njc3ODM0Nl5BMl5BanBnXkFtZTgwNDc4MTU5NTM@._V1_SY1000_CR0,0,678,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjM2Mzc1MTc3MF5BMl5BanBnXkFtZTgwNjg2OTQ5NTM@._V1_SY1000_CR0,0,1474,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjE1NjQ2NDU0M15BMl5BanBnXkFtZTgwOTAzNjY5NTM@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTUzNDgyMjQyNV5BMl5BanBnXkFtZTgwNjAzNjY5NTM@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTY3MTEwOTI5NF5BMl5BanBnXkFtZTgwNTAzNjY5NTM@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMzI3OTE2MDM3N15BMl5BanBnXkFtZTgwMjEzNDY5NTM@._V1_SY1000_CR0,0,619,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTUzNTQwOTY5Nl5BMl5BanBnXkFtZTgwODIzMDY5NTM@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjAxMzYwNDExM15BMl5BanBnXkFtZTgwMTkyMDY5NTM@._V1_SY1000_CR0,0,700,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTg5ODE2OTIwMF5BMl5BanBnXkFtZTgwNTE3MTU5NTM@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTA4NzUyNTYyMzdeQTJeQWpwZ15BbWU4MDcxNzE1OTUz._V1_SY1000_CR0,0,666,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNTQ5OTA5OTk3OF5BMl5BanBnXkFtZTgwODE3MTU5NTM@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjQ5Nzk4NjQ5N15BMl5BanBnXkFtZTgwMTYxMDY5NTM@._V1_SY1000_CR0,0,703,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTU4ODgxMzQ0OF5BMl5BanBnXkFtZTgwNzYxMDY5NTM@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNjIwMDkwOTUwMl5BMl5BanBnXkFtZTgwMTcxMDY5NTM@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTUzMzkyNDE2Ml5BMl5BanBnXkFtZTgwMjcxMDY5NTM@._V1_SY1000_CR0,0,1439,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNzIyMzk2NDcxMF5BMl5BanBnXkFtZTgwMDkyMDY5NTM@._V1_SY1000_SX1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTU4OTA0ODEyNV5BMl5BanBnXkFtZTgwOTgyMDY5NTM@._V1_SY1000_CR0,0,679,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTYyOTY2MDEyN15BMl5BanBnXkFtZTgwNjgyMDY5NTM@._V1_SY1000_CR0,0,673,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNjAwMDkzNzI1OF5BMl5BanBnXkFtZTgwOTcyMDY5NTM@._V1_SY1000_SX1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNDk5Mjk0MDQ5N15BMl5BanBnXkFtZTgwNDcxMDY5NTM@._V1_SY1000_CR0,0,1348,1000_AL_.jpg',
      ]
  })
};
</script>

<style lang="scss" scoped>
// @import './variables.scss';

h1 {
  color: green;
}
</style>