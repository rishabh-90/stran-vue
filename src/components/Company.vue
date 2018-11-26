<template>
    <!-- Other HTML removed for brevity -->
    <div class="col col-xs-12 company">
        <div class="row">
            <div class="col-xs-12 col-md-12 col-lg-12 col-xl-4">
                <vue-circle :progress="company.circleprogress" :size="75" :reverse="true" line-cap="round" :fill="{ color: company.circleColor }" empty-fill="rgba(0, 0, 0, .1)" :animation-start-value="0.0" :start-angle="25" insert-mode="append" :thickness="5" :show-percent="true">
                </vue-circle>
            </div>
            <div class="col-xs-12 col-md-12 col-lg-12 col-xl-8 company-other-stats">
                <p class="company-title">{{company.name}}</p>
                <ProgressBar :color="company.color" :progressWidth="company.progressWidth" />
                <p class="company-information">{{company.text}}</p>
            </div>
        </div>
    </div>
    
    <!-- Other HTML removed for   brevity -->
</template>

<script>
    import VueCircle from "vue2-circle-progress";
    import ProgressBar from "./ProgressBar.vue";
    export default {
        name: "Company",
        props: {
            company: Object
        },
        components: {
            VueCircle,
            ProgressBar
        }
    };
</script>

<style <style lang="scss" scoped>
    .company {
        background: white;
        padding: 15px 26px;
        border-radius: 30px;
        border: solid 10px #F2F2F2;
    }
    
    .company-other-stats {
        padding: 13px 17px;
    }
    
    .company-title {
        font-size: 12px;
        margin-bottom: 0px
    }
    
    .company-information {
        margin-bottom: 5px;
        font-size: 12px;
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
        .circle {
            left: 18%;
        }
    }
</style>