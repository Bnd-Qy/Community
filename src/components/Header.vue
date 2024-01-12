<template>
    <header class="header style7">
		<div class="top-bar">
			<div class="container">
				<div class="top-bar-left">
					<div class="header-message">
                        欢迎进入 博彦快讯！
					</div>
				</div>
				<div class="top-bar-right">
					<ul class="header-user-links">
                        <div v-if="loginStats">
                            欢迎您！ 
                            <a href="/usercenter/"><span style="font-weight: bolder;">[ {{ user.username }} ]</span></a>
                            &emsp;<a href="/logout/">退出登录</a>&nbsp;
                        </div>
                        <li v-else>
                            <a href="/login/">登录</a>&nbsp;&nbsp;&nbsp;
                            <a href="/register/">注册</a>
                        </li>
					</ul>
				</div>
			</div>
		</div>
    </header>
</template>
<script setup lang="ts">
import {ref} from 'vue'
const loginStats=ref(false);
const user=ref({
    username:'测试账户'
})
</script>

<script setup>

</script>