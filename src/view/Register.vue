<template>
    <div class="main-content main-content-login">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="breadcrumb-trail breadcrumbs">
						<ul class="trail-items breadcrumb">
							<li class="trail-item trail-begin">
								<a href="index.html">Home</a>
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

                                <div id="register" v-cloak class="col-lg-6 col-md-6 col-sm-12">
									<div class="login-item">
										<h5 class="title-login">用户注册
                                                <span class="error-tip" v-if="reg_error_msg">{{ reg_error_msg }}</span>
                                        </h5>
										<form class="register" method="post" action="/register/" @submit="reg_sub">
											<p class="form-row form-row-wide">
												<input  placeholder="用户名" v-model="username" @blur="check_uname"  name="username"  type="text" class="input-text">
											    <span class="error-tip" v-show="error_username">{{error_username_msg}}</span>
                                            </p>
                                            <p class="form-row form-row-wide">
												<input  placeholder="手机号" v-model="phone" @blur="check_phone"  name="phone"  type="text" class="input-text">
											    <span class="error-tip" v-show="error_phone">{{error_phone_msg}}</span>
                                            </p>
                                            <p class="form-row form-row-wide">

												<input style="width: 250px;" v-model="imgcode" placeholder="图片验证码" @blur="check_imgcode" name="imgcode"  type="text" class="input-text"  >
                                                <img style="height: 40px;float: right;"  :src="imgcode_url">
                                                <span class="error-tip" v-show="error_imgcode">{{error_imgcode_msg}}</span>
                                            </p>

                                            <p class="form-row form-row-wide">

												<input style="width: 230px;" v-model="smscode" placeholder="短信验证码" @blur="check_smscode"  name="msgcode"  type="text" class="input-text" id="reg_mescode" >
											    <span class="error-tip" v-show="error_smscode">{{error_smscode_msg}}</span><a href="javascript:;" style="font-size: 16px;text-align: center;font-weight: normal;float: right" id="reg_mescode_btn" able="able" @click="send_smscode" >{{smscode_btn}}</a>
                                            </p>

                                            <p class="form-row form-row-wide">

												<input  placeholder="设置密码" v-model="password" @blur="check_pwd" name="password"  type="password" class="input-text">
											    <span class="error-tip" v-show="error_password">{{error_password_msg}}</span>
                                            </p>

											<p class="form-row">
												<span class="inline">
													点击 “注册” 即表示您同意并愿意遵守芒果头条 <a href="#">用户协议</a> 和 <a href="#">隐私政策</a> 。
                                                </span>
											</p>
											<p class="">
												<input type="submit"  class="button-submit" style="font-size: 16px;font-weight: normal;" value="注册">
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
import { ref } from 'vue';
const reg_error_msg = ref('注册失败!')
//username
const username = ref('');
const error_username = ref(true);
const error_username_msg = '用户名格式有误';
async function check_uname():Promise<void>{
    
}

const phone = ref('');
const error_phone = ref(true);
const error_phone_msg = '手机号码格式有误';
async function check_phone():Promise<void>{
    
}

const imgcode = ref('');
const imgcode_url = ref('');
const error_imgcode = ref(true);
const error_imgcode_msg ='验证码错误';
const smscode_btn = '发送短信';
async function check_imgcode():Promise<void>{
    
}

const smscode=ref('');
const error_smscode = ref(true);
const error_smscode_msg =  '短信验证码错误';
async function check_smscode():Promise<void>{
    
}

const password= ref('');
const error_password= ref(true);
const error_password_msg = '密码格式有误';
async function check_pwd():Promise<void>{
    
}

function reg_sub(){

}

async function send_smscode(){

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