<template>
<div class="container">
			<div class="main-header">
				<div class="row">
					<div class="col-lg-3 col-sm-4 col-md-3 col-xs-7 col-ts-12 header-element">
						<div class="logo">
							<a href="index.html">
								<img src="/beyondsoft-logo.png" alt="img">
							</a>
						</div>
					</div>
					<div class="col-lg-7 col-sm-8 col-md-6 col-xs-5 col-ts-12">
						<div class="block-search-block">
							<form class="form-search form-search-width-category" action="/search/" method="get">
								<div class="form-content">
									<div class="inner">
										<input type="text" class="input" name="q" value="" placeholder="搜索站内资讯">
									</div>
									<button class="btn-search" type="submit">
										<span class="icon-search"></span>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="header-nav-container">
			<div class="container">
				<div class="header-nav-wapper main-menu-wapper">

					<div class="header-nav">
						<div class="container-wapper">
							<ul class="teamo-clone-mobile-menu teamo-nav main-menu " id="menu-main-menu">
                                    <li class="menu-item m-active" v-for="channel,index in channels" :key="index">
                                        <a  style="font-weight: normal;font-size: 16px;" href="{{ channel.url }}" class="teamo-menu-item-title">{{ channel.name }}</a>
                                    </li>
								<li class="menu-item">
									<a style="font-weight: normal;font-size: 16px;" href="/about/" class="teamo-menu-item-title"  >更多</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script setup lang="ts">
import {reactive} from 'vue';
  const  channels= reactive([
        {url:'',name:'频道1'},
        {url:'',name:'频道2'},
        {url:'',name:'频道3'}
    ])
    const categorys=reactive([
        {url:'',name:'资讯分类1'},
        {url:'',name:'资讯分类2'},
        {url:'',name:'资讯分类3'}
    ])
</script>