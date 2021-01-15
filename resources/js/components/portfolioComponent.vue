<template>
   <div class="home__portfolioItem">
      <div class="home__portfolioImage">
         <img :src="imgUrl" alt="" />
      </div>
      <div class="home__portfolioDescriptionArea">
         <div class="home__portfolioHead">{{ datum.title }} #{{ datum.id }}</div>
         <div class="home__portfolioInfoArea">
            <div class="home__portfolioInfo">
               <div class="home__portfolioInfoItems">
                  <div class="home__portfolioInfoItem -date"><span>制作日</span>{{ datum.createDate }}</div>
                  <div class="home__portfolioInfoItem -design"><span>スマホ対応</span>{{ datum.design }}</div>
               </div>
               <div class="home__portfolioUse">
                  <div class="home__portfolioUseHead">使用言語など</div>

                  <template v-for="(learning, index) of datum.learning">
                     <span class="home__portfolioUseItem" :key="index">
                        <img :src="require(`../../images/icons/${iconName(learning)}`).default" alt="" />

                        <span>{{ learning }}</span>
                     </span>
                  </template>
               </div>
            </div>
            <div class="home__portfolioLinks">
               <a class="home__portfolioLink" :href="`/detail/${datum.detail}`"
                  ><i class="fas fa-book"></i>制作物の詳細</a
               >
               <a class="home__portfolioLink" :href="datum.look"><i class="far fa-eye"></i>作品を見る</a>
               <a class="home__portfolioLink" :href="datum.github"><i class="fab fa-github"></i>GitHub</a>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import iconNameData from '../data/iconNameData.json';

export default {
   props: {
      datum: Object
   },
   data() {
      return {
         iconNames: iconNameData
      };
   },
   computed: {
      iconName() {
         let icon;
         return function (name) {
            this.iconNames.forEach((val) => {
               if (name.indexOf(val.name) == 0) {
                  console.log(val);
                  icon = val.iconName;
               }
            });
            return icon;
         };
      },
      imgUrl() {
         return this.datum.image && require(`../../images/home/${this.datum.image}`).default;
      }
   }
};
</script>
