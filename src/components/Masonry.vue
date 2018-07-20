<template>
  <!-- <div style="height: 3000px;background: gray;">
    <h1>{{ title }}</h1>
  </div> -->
  <masonry :cols="3" :gutter="0">
    <div v-for="(item, index) in items" :key="index">
      <div class="img-div" :style="'height: 114px;background: url(' + item + ') 50% no-repeat;background-size: cover;border: 5px solid #fff;box-sizing: border-box;'"></div>
    </div>
  </masonry>
</template>

<script>
export default {
  name: "masonry-comp",
  data: () => ({
      title: "Masonry Component",
      items: [
        'https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_UX182_CR0,0,182,268_AL_.jpg',
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
        'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTQ2MTgyNzY2MV5BMl5BanBnXkFtZTgwOTA5MjkxNjE@._V1_SY1000_CR0,0,1502,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMGE2NTU5MjctMzYyNy00YjdjLWEwOGItOWNhZTQ2ZTZjY2Q0XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg',
        'https://m.media-amazon.com/images/M/MV5BZWUyMWVlMjEtNjRkYS00YjNlLThmODItYzc1MTQ5NzBiOGM2XkEyXkFqcGdeQXVyNjY5NDczMTk@._V1_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjI5OTcwMzIyNF5BMl5BanBnXkFtZTgwNjMxNDMzMTI@._V1_SY1000_CR0,0,1333,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjQwNTgxMTEwNl5BMl5BanBnXkFtZTgwNDc4MjkzNTM@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjI3OTA3NjQ0M15BMl5BanBnXkFtZTgwMDQ0MDg3NDM@._V1_.jpg',
        'https://m.media-amazon.com/images/M/MV5BOTI5MjMyMDIxMF5BMl5BanBnXkFtZTgwODAxMjgwNDI@._V1_SY1000_CR0,0,1502,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTQ2MTgyNzY2MV5BMl5BanBnXkFtZTgwOTA5MjkxNjE@._V1_SY1000_CR0,0,1502,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMGE2NTU5MjctMzYyNy00YjdjLWEwOGItOWNhZTQ2ZTZjY2Q0XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg',
        'https://m.media-amazon.com/images/M/MV5BZWUyMWVlMjEtNjRkYS00YjNlLThmODItYzc1MTQ5NzBiOGM2XkEyXkFqcGdeQXVyNjY5NDczMTk@._V1_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjI5OTcwMzIyNF5BMl5BanBnXkFtZTgwNjMxNDMzMTI@._V1_SY1000_CR0,0,1333,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjQwNTgxMTEwNl5BMl5BanBnXkFtZTgwNDc4MjkzNTM@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjI3OTA3NjQ0M15BMl5BanBnXkFtZTgwMDQ0MDg3NDM@._V1_.jpg',
        'https://m.media-amazon.com/images/M/MV5BOTI5MjMyMDIxMF5BMl5BanBnXkFtZTgwODAxMjgwNDI@._V1_SY1000_CR0,0,1502,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNDUxOTU4MjkwOF5BMl5BanBnXkFtZTgwODU0NzAzMTI@._V1_SY1000_CR0,0,1473,1000_AL_.jpg',
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