<template>
<div class="content-area content-blog col-lg-9 col-md-8 col-sm-12 col-xs-12">
        <div class="site-main">
            <h3 class="custom_blog_title">
                新闻列表
            </h3>

            <div class="blog-list list-style" v-for="article in articles">
                    <div class="blog-item">
                    <div class="post-format">
                        <a href="/detail/{{ article.id }}">
                            <img :src="article.default_img.url" alt="img">
                        </a>
                    </div>
                    <div class="post-info">
                        <div class="category-blog">
                            <a href="#">{{ article.category.name }}</a>
                        </div>
                        <h3 class="post-title">
                            <a :href="`/detail/${article.id}`">{{ article.title }}</a>
                        </h3>

                        <div class="author-view">
                            <div class="author">
                                <div class="avt">
                                    <img src="/avt-blog1.png" alt="img">
                                </div>
                                <h3 class="name">
                                    微末数码
                                </h3>
                            </div>
                            <div class="review">
                                <div class="view">
                                    <span class="icon-view">
                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                    </span>
                                    <span class="count">
                                        631
                                    </span>
                                </div>
                                <div class="s-comments">
                                    <span class="icon-cmt">
                                        <i class="fa fa-commenting" aria-hidden="true"></i>
                                    </span>
                                    <span class="count">
                                        82
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pagination clearfix style2">
                <div class="nav-link">
                    <a href="/list/" class="page-numbers"><i class="icon fa fa-angle-left" aria-hidden="true"></i></a>
                    <a href="/list/" class="page-numbers">1</a>
                    <a href="/list/" class="page-numbers"><i class="icon fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref,reactive} from 'vue'
const articles=reactive(
    [
        {
            id:1002,
            title:'新闻标题2',
            category:{
                name:'类别2'
            },
            default_img:{
                url:'/vivo.jpeg'
            },
            author:'环球时报'
        },
        {
            id:1003,
            title:'新闻标题3',
            category:{
                name:'类别3'
            },
            default_img:{
                url:'/weixin.jpeg'
            }
        }
    ]
)
</script>

<style scoped>

</style>