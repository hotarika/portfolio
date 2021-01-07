<template>
   <div class="home__learningItem">
      <h2>{{ learning.title }}</h2>
      <div class="home__learningDetailWrap">
         <div class="home__learningSkills">
            <template v-for="(learning, index) of learning.learningContents">
               <span class="home__learningSkill" :class="addClass(learning)" :key="index">
                  <img
                     class="home__learningSkillIcon"
                     :class="addClass(learning)"
                     :src="require(`../../images/icons/${iconName(learning)}`).default"
                     alt=""
                  />{{ learning }}
               </span>
            </template>
         </div>
         <div class="home__learningDescriptionWrap">
            <div class="home__learningDetailSec -level">
               <h3>現在のレベル</h3>
               <pre class="home__learningText -level">{{ learning.currentLevel }}</pre>
            </div>
            <div class="home__learningDetailSec -point">
               <h3>学習する上で意識したこと</h3>
               <pre class="home__learningText -point">{{ learning.consciousness }}</pre>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import iconNameData from '../data/iconNameData.json';

export default {
   props: {
      learning: Object
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
               if (val.name == name) {
                  icon = val.iconName;
               }
            });
            return icon;
         };
      },
      addClass() {
         let cssClass;
         return function (name) {
            this.iconNames.forEach((val) => {
               if (val.name == name) {
                  cssClass = val.cssClass;
               }
            });
            return cssClass;
         };
      }
   }
};
</script>
