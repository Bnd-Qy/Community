<template>
    <div class="main-content main-content-login">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="breadcrumb-trail breadcrumbs">
						<ul class="trail-items breadcrumb">
							<li class="trail-item trail-begin">
								<a href="/index/">Home</a>
							</li>
							<li class="trail-item trail-end active">
								Authentication
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="content-area col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="site-main">
						<h3 class="custom_blog_title">
							Authentication
						</h3>
						<div class="customer_login">
							<div class="row">
                                    <div id="login"  class="col-lg-6 col-md-6 col-sm-12">
									<div class="login-item">
										<h5 class="title-login">登录账号
                                            <span class="error-tip" v-show="login_error_msg != null || login_error_msg != ''">{{ login_error_msg }}</span>
                                        </h5>
										<form class="login"  action="/login/" method="post" >
                                            <input type="hidden" name="next" value="">
											<div class="social-account">
												<h6 class="title-social">社交帐号登录</h6>
												<a href="#" class="mxh-item">
													<i class="icon iconfont">&#xe667;</i>
                                                    <span class="text">QQ</span>
												</a>
												<a href="#" class="mxh-item">
                                                    <i class="icon iconfont">&#xe61a;</i>
													<span class="text">微信</span>
												</a>
											</div>

											<p class="form-row form-row-wide">
												<label class="text">用户名</label>
												<input title="username" v-model="username"  name="username"  type="text" class="input-text">
											    <span class="error-tip" v-show="error_username"> {{error_username_msg}} </span>
                                            </p>
											<p class="form-row form-row-wide">
												<label class="text">密 码</label>
												<input title="password" v-model="password" @blur="check_pwd" name="password" type="password" class="input-text">
											    <span class="error-tip" v-show="error_password"> {{error_password_msg}} </span>
                                            </p>
											<p class="lost_password">
												<span class="inline">
													<input type="checkbox"  name="remember" checked id="cb1"  >
													<label for="cb1" class="label-text">记住密码</label>
												</span>
												<a href="#" class="forgot-pw">忘记密码?</a>
											</p>
											<p class="form-row">
												<input type="submit" class="button-submit" value="登 录">
											</p>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import '@/style/css/main.css'
import '@/style/icon/iconfont.css'


const login_error_msg='登录失败!';


const username = ref('')
let error_username = ref(false);
let error_username_msg = '用户名格式有误';

const password = ref('');
let error_password = ref(false); 
let error_password_msg = '密码格式有误';


function check_pwd(){
    console.log('检验密码');
}
</script>

<style scoped>
.iconsize{
            font-size: 22px;
        }
.error-tip{
            color: red;
        }
[v-cloak]{
            display: none;
        }
</style>