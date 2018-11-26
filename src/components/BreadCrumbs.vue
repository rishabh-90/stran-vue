<template>
  <!-- Other HTML removed for brevity -->
  <div class="breadcrumbs">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i> Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
    </ol>
  </div>
  <!-- Other HTML removed for brevity -->
</template>

<script>
  export default {
    name: "BreadCrumb",
    props: {
      //   title: String,
      //   authorName: String,
      //   color_prop: String,
      //   isBlue: Boolean
    }
  };
</script>

<style scoped lang="scss">
  .breadcrumbs {
    padding-top: 20px;
    .breadcrumb {
      background: none;
      margin-bottom: 0px;
      li {
        margin: 0px 0px;
        a {
          color: black
        }
      }
    }
  }
  @media (min-width: 1281px) {
        //CSS
    }
    
    @media (min-width: 1025px) and (max-width: 1280px) {
        //CSS
    }
    
    @media (min-width: 768px) and (max-width: 1024px) {
        //CSS
        .circle {
            left: 18%;
        }
    }
    
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        //CSS
        .circle {
            left: 25%;
        }
    }
    
    @media (min-width: 481px) and (max-width: 767px) {
        //CSS
        .circle {
            left: 18%;
        }
    }
    
    @media (min-width: 320px) and (max-width: 480px) {
        //CSS
        .breadcrumb {
            padding: .75rem 0rem;
        }
    }
</style>