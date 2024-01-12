<template>
       <div class="main-content main-content-login">
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
				<div class="content-area col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="site-main">
						<h3 class="custom_blog_title">
							用户中心
						</h3>
						<div class="customer_login" id="user_center">
							<div class="row">
                                    <div id="user_center"  class="col-lg-6 col-md-6 col-sm-12">
									<div class="login-item">
                                        <table border="0" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td width="30%">用户名</td>
                                                <td>{{ user.username }}</td>
                                            </tr>
                                             <tr>
                                                <td>手机号</td>
                                                <td>{{ user.phone }}</td>
                                            </tr>
                                             <tr>
                                                <td>邮箱</td>
                                                <td>
                                                    <div v-if="user.email == ''">
                                                        <input type="text" v-model="email" style="width: 270px"><button @click="save_email">保存</button>
                                                        <br><span class="error-tip" v-show="error_email">{{error_email_msg}}</span>
                                                    </div>
                                                        {{ user.email }}
                                                </td>
                                             </tr>
                                        </table>
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

const user=ref({
    username:'测试账户',
    phone:'18076548888',
    email:'test@163.com'
})
const email=ref('');
const error_email=ref(true);
const error_email_msg= '邮箱地址有误!';
function save_email(){

}
</script>