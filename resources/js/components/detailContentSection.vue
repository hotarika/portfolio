<template>
   <section :id="id" class="c-section">
      <div class="container">
         <h2 class="c-h2">{{ h2 }}</h2>
         <div class="c-h2__contentSec">
            <slot name="content"></slot>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   props: {
      h2: String,
      id: String
   }
};
</script>
