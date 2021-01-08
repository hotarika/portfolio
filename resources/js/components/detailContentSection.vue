<template>
   <section id="content" class="c-section">
      <div class="container">
         <h2 class="c-h2">主な機能の説明</h2>
         <div class="c-h2__contentSec">
            <slot name="content"></slot>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   props: { descriptions: Array }
};
</script>
