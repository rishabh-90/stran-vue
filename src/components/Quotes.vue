<template>
  <!-- Other HTML removed for brevity -->
  <div>
    <blockquote :class="[ quote.isBlue ? 'quote-box-blue' : 'quote-box-voilet' ]">
      <p class="quotation-mark">
        “
      </p>
      <p class="quote-text">
        {{ quote.title }}
      </p>
      <p class="blog-post-bottom pull-left">
        - {{quote.authorName}}
      </p>
    </blockquote>
  </div>
  <!-- Other HTML removed for brevity -->
</template>

<script>
  export default {
    name: "Quotes",
    props: {
      quote: Object,
      isBlue: Boolean
    }
  };
</script>

<style scoped>
  blockquote {
    border-left: none;
  }
  
  .quote-badge {
    background-color: rgba(0, 0, 0, 0.2);
  }
  
  .quote-box-blue {
    overflow: hidden;
    padding-top: -100px;
    border-radius: 6px;
    background-color: #4154AF;
    padding: 10px;
    color: white;
    width: 100%;
    margin-bottom: 12px;
  }

  .quote-box-voilet {
    overflow: hidden;
    padding-top: -100px;
    border-radius: 6px;
    background-color: #8F36AA;
    padding: 10px;
    color: white;
    width: 100%;
    margin-bottom: 12px;
  }
  
  .quotation-mark {
    margin-top: -10px;
    font-weight: bold;
    font-size: 79px;
    color: white;
    opacity: .5;
    font-family: "Times New Roman", Georgia, Serif;
  }
  
  .quote-text {
    font-size: 12px;
    margin-top: -65px;
    text-align: justify;
  }
</style>