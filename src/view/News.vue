<template>
    <div class="main-content main-content-blog list left-sidebar">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="breadcrumb-trail breadcrumbs">
						<ul class="trail-items breadcrumb">

						</ul>
					</div>
				</div>
			</div>
			<div class="row">
				<NewsList></NewsList>
                <div class="sidebar sidebar-blog col-lg-3 col-md-4 col-sm-12 col-xs-12">
                <div class="wrapper-sidebar">
                    <div class="widget widget-categories">
                        <h3 class="widgettitle"></h3>
                        <ul class="list-categories">
                            <li><a href="#">全部</a></li>
                            <li v-for="category,index in categorys" :key="index">
                                <a :href="category.url">{{ category.name }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="widget widget-post">
                        <h3 class="widgettitle">热门新闻</h3>
                        <ul class="teamo-posts">
                            <li class="widget-post-item">
                                <div class="thumb-blog">
                                    <img src="/mayi.png" alt="img">
                                </div>
                                <div class="post-content">
                                    <div class="cat">
                                        <a href="#">Life Style</a>
                                    </div>
                                    <h5 class="post-title"><a href="#">蚂蚁集团全资控股蚂蚁借呗运营主体 <span>[...]</span></a></h5>
                                </div>
                            </li>
                            <li class="widget-post-item">
                                <div class="thumb-blog">
                                    <img src="/meituan.png" alt="img">
                                </div>
                                <div class="post-content">
                                    <div class="cat">
                                        <a href="#">Lookbook</a>
                                    </div>
                                    <h5 class="post-title"><a href="#">美团外卖换LOGO了？！网友：像山寨的 <span>[...]</span></a></h5>
                                </div>
                            </li>
                            <li class="widget-post-item">
                                <div class="thumb-blog">
                                    <img src="/xinpian.jpeg" alt="img">
                                </div>
                                <div class="post-content">
                                    <div class="cat">
                                        <a href="#">Street Style</a>
                                    </div>
                                    <h5 class="post-title"><a href="#">英国媒体：中国与世界格格不入，不懂他们为何要专门办芯片大学 <span>[...]</span></a></h5>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
			</div>
		</div>
    </div>
</template>
<script setup lang="ts">
import NewsList from '@/components/NewsList.vue';
import {reactive} from 'vue'
    const categorys=reactive([
        {url:'',name:'资讯分类1'},
        {url:'',name:'资讯分类2'},
        {url:'',name:'资讯分类3'}
    ])
</script>