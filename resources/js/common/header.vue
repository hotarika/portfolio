<template>
   <header class="header shadow-sm">
      <div class="container">
         <div class="header__itemsWrap">
            <a class="header__logoLink" :href="publicPath">
               <img class="header__logo" :src="require('../../images/logo-white.svg').default" alt="ロゴ" />
            </a>
            <ul class="header__lists">
               <li class="header__list" style="display: none" :style="homeNav">
                  <a class="header__link" href="#portfolio"><i class="fas fa-laptop-code"></i>ポートフォリオ</a>
               </li>
               <li class="header__list" style="display: none" :style="homeNav">
                  <a class="header__link" href="#learning"><i class="fas fa-pencil-alt"></i>学習内容</a>
               </li>
            </ul>
         </div>
      </div>
   </header>
</template>

<script>
export default {
   computed: {
      homeNav() {
         if (this.locationHref === this.publicPath) {
            return 'display:flex;';
         }
         return false;
      },
      publicPath() {
         return location.origin + '/';
      },
      locationHref() {
         const before = location.href;
         const after = before.replace(location.hash, '');
         return after;
      }
   }
};
</script>
