<template>
    <div class="bar">
        <div class="progress" :class="{'progress-green':color == 'green','progress-blue':color == 'blue','progress-orange':color == 'orange','progress-purple':color == 'purple'}" 
        :style="{width: progressWidth}">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProgressBar',
        props: {
            color: String,
            progressWidth: String,
        }
    
    }
</script>

<style lang="scss" scoped>
    .bar {
        width: 100%;
        background: #dfdfdf;
        overflow: hidden;
        height: 10px;
        border-radius: 11px;
    }
    
    .progress {
        float: left;
        padding: 0px 15px;
    }
    
    .percent {
        float: right;
        font-weight: 600;
        height: 30px;
        line-height: 30px;
    }
    
    .progress-green {
        background: rgba(210, 255, 82, 1);
        background: -moz-linear-gradient(left, rgba(210, 255, 82, 1) 0%, rgba(145, 232, 66, 1) 100%);
        background: -webkit-gradient(left top, right top, color-stop(0%, rgba(210, 255, 82, 1)), color-stop(100%, rgba(145, 232, 66, 1)));
        background: -webkit-linear-gradient(left, rgba(210, 255, 82, 1) 0%, rgba(145, 232, 66, 1) 100%);
        background: -o-linear-gradient(left, rgba(210, 255, 82, 1) 0%, rgba(145, 232, 66, 1) 100%);
        background: -ms-linear-gradient(left, rgba(210, 255, 82, 1) 0%, rgba(145, 232, 66, 1) 100%);
        background: linear-gradient(to right, rgba(210, 255, 82, 1) 0%, rgba(145, 232, 66, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d2ff52', endColorstr='#91e842', GradientType=1);
    }
    
    .progress-orange {
        background: rgba(255, 175, 75, 1);
        background: -moz-linear-gradient(left, rgba(255, 175, 75, 1) 0%, rgba(255, 146, 10, 1) 100%);
        background: -webkit-gradient(left top, right top, color-stop(0%, rgba(255, 175, 75, 1)), color-stop(100%, rgba(255, 146, 10, 1)));
        background: -webkit-linear-gradient(left, rgba(255, 175, 75, 1) 0%, rgba(255, 146, 10, 1) 100%);
        background: -o-linear-gradient(left, rgba(255, 175, 75, 1) 0%, rgba(255, 146, 10, 1) 100%);
        background: -ms-linear-gradient(left, rgba(255, 175, 75, 1) 0%, rgba(255, 146, 10, 1) 100%);
        background: linear-gradient(to right, rgba(255, 175, 75, 1) 0%, rgba(255, 146, 10, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffaf4b', endColorstr='#ff920a', GradientType=1);
    }
    
    .progress-purple {
        background: rgba(203, 96, 179, 1);
        background: -moz-linear-gradient(left, rgba(203, 96, 179, 1) 0%, rgba(193, 70, 161, 1) 50%, rgba(168, 0, 119, 1) 51%, rgba(219, 54, 164, 1) 100%);
        background: -webkit-gradient(left top, right top, color-stop(0%, rgba(203, 96, 179, 1)), color-stop(50%, rgba(193, 70, 161, 1)), color-stop(51%, rgba(168, 0, 119, 1)), color-stop(100%, rgba(219, 54, 164, 1)));
        background: -webkit-linear-gradient(left, rgba(203, 96, 179, 1) 0%, rgba(193, 70, 161, 1) 50%, rgba(168, 0, 119, 1) 51%, rgba(219, 54, 164, 1) 100%);
        background: -o-linear-gradient(left, rgba(203, 96, 179, 1) 0%, rgba(193, 70, 161, 1) 50%, rgba(168, 0, 119, 1) 51%, rgba(219, 54, 164, 1) 100%);
        background: -ms-linear-gradient(left, rgba(203, 96, 179, 1) 0%, rgba(193, 70, 161, 1) 50%, rgba(168, 0, 119, 1) 51%, rgba(219, 54, 164, 1) 100%);
        background: linear-gradient(to right, rgba(203, 96, 179, 1) 0%, rgba(193, 70, 161, 1) 50%, rgba(168, 0, 119, 1) 51%, rgba(219, 54, 164, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cb60b3', endColorstr='#db36a4', GradientType=1);
    }
    
    .progress-blue {
        background: rgba(73, 155, 234, 1);
        background: -moz-linear-gradient(left, rgba(73, 155, 234, 1) 0%, rgba(32, 124, 229, 1) 100%);
        background: -webkit-gradient(left top, right top, color-stop(0%, rgba(73, 155, 234, 1)), color-stop(100%, rgba(32, 124, 229, 1)));
        background: -webkit-linear-gradient(left, rgba(73, 155, 234, 1) 0%, rgba(32, 124, 229, 1) 100%);
        background: -o-linear-gradient(left, rgba(73, 155, 234, 1) 0%, rgba(32, 124, 229, 1) 100%);
        background: -ms-linear-gradient(left, rgba(73, 155, 234, 1) 0%, rgba(32, 124, 229, 1) 100%);
        background: linear-gradient(to right, rgba(73, 155, 234, 1) 0%, rgba(32, 124, 229, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#499bea', endColorstr='#207ce5', GradientType=1);
    }
</style>

