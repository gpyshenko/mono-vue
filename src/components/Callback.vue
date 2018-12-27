<template>
    <div class="callback">
        <p class="callback-title">Привет, позвони нам: (90) 930 45 04</p>
        <div class="callbackImg">
            <img src="../assets/img/dots.png" class="callbackImg-dots" alt="">
            <div class="callbackImg-inner">
                <img src="../assets/img/callback.jpg" class="callbackImg-girl" alt="">
                <img src="../assets/img/cat.png" class="callbackImg-cat" alt="">
            </div>
        </div>
        <div class="callback-controls">
            <a href="tel: +998909304504" class="callback-btn">Заказать звонок</a>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.callback {
    position: absolute;
    top: 60px;
    right: 0;
    z-index: 2;
    height: calc(100vh - 60px);
    width: 340px;
    padding: 66px 30px;
    background-color: var(--cerise);
    &-title {
        margin-bottom: 66px;
        font-size: 30px;
        font-weight: 800;
        line-height: 36px;
        color: #fff;
    }
    &Img {
        position: relative;
        margin-bottom: 200px;
        &-inner, &-cat {
            position: absolute;
        }
        &-inner {
            top: 35px;
            left: -125px;
            z-index: 2;
            &:hover {
                .callbackImg-cat {
                    transform: translateX(22px)
                }
            }
        }
        &-girl {
            position: relative;
            z-index: 2;
            max-width: none;
        }
        &-cat {
            right: 0;
            bottom: 28%;
            z-index: 1;
            transition: .3s ease-out;
        }
    }
    &-controls {
        position: relative;
        z-index: 2;
    }
    &-btn {
        position: absolute;
        top: -16px;
        right: -30px;
        padding: 18px 15px;
        font-size: 30px;
        font-weight: 800;
        text-transform: uppercase;
        color: #fff;
        background-color: var(--blackPearl-dark);
        box-shadow: 10px 11px 0 rgba(0,0,0,.15);
    }
}
</style>
