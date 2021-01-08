<template>
   <footer class="footer">
      <div class="container">
         <a class="footer__imageWrap" :href="publicPath">
            <img :src="require('../../images/logo-white.svg').default" alt="ロゴ" />
         </a>
      </div>
   </footer>
</template>

<script>
export default {
   computed: {
      publicPath() {
         return location.origin + '/';
      }
   }
};
</script>
