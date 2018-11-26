<template>
    <nav class="navbar navbar-icon-top navbar-expand-lg bg-blue">
        <a class="navbar-brand" href="#">StrainPrint</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="fa fa-bars" style="color:white"></span>
                  </button>
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto notification-navbar">
                <li class="nav-item active">
                    <a class="nav-link" href="#">
                        <i class="fas fa-bars"></i>
                    </a>
                </li>
                <li>
                    <form class="form-inline my-2 my-lg-0 search-box">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                    </form>
                </li>
            </ul>
    
            <ul class="navbar-nav ml-auto notification-navbar">
                <li class="nav-item active">
                    <a class="nav-link" href="#">
                        <i class="fa fa-bell-o">
                                <span class="badge badge-danger">{{notification.bellNotification}}</span>
                            </i>
    
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="fa fa-comments-o">
                            <span class="badge badge-danger">{{notification.comments}}</span>
                          </i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="fas fa-cog"></i>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "navbar",
        props: {
            notification: Object
        },
    }
</script>

<style scoped lang="scss">
    @import url("//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
    .bg-blue {
        background: #3B3F50 !important;
        height: 52px;
    }
    
    .search-box {
        input {
            border-radius: 20px;
            margin-top: 15px;
        }
    }
    
    .notification-navbar {
        li {
            margin: 0px 0px;
            a:hover {
                color: white;
            }
        }
    }
    
    .navbar-icon-top .navbar-nav .nav-link>.fa {
        position: relative;
        width: 36px;
        font-size: 17px;
    }
    
    .navbar-icon-top .navbar-nav .nav-link>.fa>.badge {
        font-size: 0.75rem;
        position: absolute;
        right: 0;
        font-family: sans-serif;
    }
    
    .navbar-icon-top .navbar-nav .nav-link>.fa {
        top: 3px;
        line-height: 12px;
    }
    
    .navbar-icon-top .navbar-nav .nav-link>.fa>.badge {
        top: -10px;
    }
    
    @media (min-width: 576px) {
        .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link {
            text-align: center;
            display: table-cell;
            height: 70px;
            vertical-align: middle;
            padding-top: 0;
            padding-bottom: 0;
        }
        .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link>.fa {
            display: block;
            width: 48px;
            margin: 2px auto 4px auto;
            top: 0;
            line-height: 24px;
        }
        .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link>.fa>.badge {
            top: -7px;
        }
    }
    
    @media (min-width: 768px) {
        .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link {
            text-align: center;
            display: table-cell;
            height: 70px;
            vertical-align: middle;
            padding-top: 0;
            padding-bottom: 0;
        }
        .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link>.fa {
            display: block;
            width: 48px;
            margin: 2px auto 4px auto;
            top: 0;
            line-height: 24px;
        }
        .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link>.fa>.badge {
            top: -7px;
        }
    }
    @media (min-width: 500px) {
        .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link {
            text-align: center;
            display: table-cell;
            height: 70px;
            vertical-align: middle;
            padding-top: 0;
            padding-bottom: 0;
        }
         .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link>.fa {
            display: block;
            width: 48px;
            margin: 2px auto 4px auto;
            top: 0;
            line-height: 24px;
        }
        .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link>.fa>.badge {
            top: -7px;
        }
    }
    
    @media (min-width: 992px) {
        .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link {
            text-align: center;
            display: table-cell;
            height: 70px;
            vertical-align: middle;
            padding-top: 0;
            padding-bottom: 0;
        }
        .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link>.fa {
            display: block;
            width: 48px;
            margin: 2px auto 4px auto;
            top: 0;
            line-height: 24px;
        }
        .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link>.fa>.badge {
            top: -7px;
        }
    }
    
    @media (min-width: 1200px) {
        .navbar-icon-top.navbar-expand-xl .navbar-nav .nav-link {
            text-align: center;
            display: table-cell;
            height: 70px;
            vertical-align: middle;
            padding-top: 0;
            padding-bottom: 0;
        }
        .navbar-icon-top.navbar-expand-xl .navbar-nav .nav-link>.fa {
            display: block;
            width: 48px;
            margin: 2px auto 4px auto;
            top: 0;
            line-height: 24px;
        }
        .navbar-icon-top.navbar-expand-xl .navbar-nav .nav-link>.fa>.badge {
            top: -7px;
        }
    }
</style>

