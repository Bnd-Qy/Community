<template>
    <div id="detailcontent" class="content-area content-blog col-lg-9 col-md-8 col-sm-12 col-xs-12">
					<div class="site-main">
						<div class="post-item">
							<div class="post-infor">
								<h3 class="post-title">
									<a href="#">{{ article.title}}</a>
								</h3>
								<div class="main-info-post">
                                        {{article.content}}
                                    <div v-for="image,index in article.images" :key="index" class="detail-img">
                                        <img :src="image.url">
                                    </div>
								</div>
							</div>
						</div>

						<div class="tags tags-blog">
							<h3 class="widgettitle">
								Tags:
							</h3>
							<ul class="tagcloud">
								<li class="tag-cloud-link active">
									<a href="#">{{ article.category.name }}</a>
								</li>

							</ul>
						</div>
						<div class="view-share">
							<div class="author-view">
								<div class="author">
									<div class="avt">
										<img src="/avt-blog1.png" alt="img">
									</div>
									<h3 class="name">
										中国移动手机俱乐部 &nbsp;&nbsp;<span style="font-size: 12px;">2020-11-04 10:31:39</span>
                                        &nbsp;&nbsp;&nbsp;<span onclick="$('.shangCls').show();"><span class="iconfont" style="vertical-align:middle;font-size: 22px;">&#xe610;</span>打赏</span>
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

                            <div class="bdsharebuttonbox share" data-tag="share_1">
                                <a class="bds_mshare" data-cmd="mshare"></a>
                                <a class="bds_qzone" data-cmd="qzone" href="#"></a>
                                <a class="bds_tsina" data-cmd="tsina"></a>
                                <a class="bds_baidu" data-cmd="baidu"></a>
                                <a class="bds_renren" data-cmd="renren"></a>
                                <a class="bds_tqq" data-cmd="tqq"></a>
                                <a class="bds_more" data-cmd="more">更多</a>
                                <a class="bds_count" data-cmd="count"></a>
                            </div>


						</div>
						<div class="comments-area">
							<h3 class="custom_blog_title">
								评论 <span class="count">(2)条</span>
							</h3>
							<form class="comment-form">
								<p class="comment-reply-content">
									<textarea rows="6" placeholder="写下你的评论..." class="input-form"></textarea>
								</p>
								<p class="form-submit">
									<span class="controll">
										<i class="icon fa fa-file-image-o" aria-hidden="true"></i>
										<i class="icon fa fa-paperclip" aria-hidden="true"></i>
										<i class="icon fa fa-smile-o" aria-hidden="true"></i>
										<button class="submit button">评论</button>
									</span>
								</p>
							</form>
                            <div v-if="hascomment">
                                <ul class="comment-list">
								<li class="comment">
									<div class="comment-item">
										<div class="author-view">
											<div class="author">
												<div class="avt">
													<img src="/avt-blog1.png" alt="img">
												</div>
												<h3 class="name">
													Adam Smith
												</h3>
											</div>
											<div class="date-reply-comment">
												<span class="date-comment">
													4 days ago
												</span>
											</div>
										</div>
										<div class="comment-body">
											<div class="comment-content">
												<p>
													Nam sed eleifend dui, eu eleifend leo.
													Mauris ornare eros quis placerat mollis.
													Duis ornare euismod risus at dictum.
													Proinat porttitor metus.
													Nunc luctus nisl suscipit, hendrerit ligula non.
												</p>
											</div>
											<div class="comment-reply-link">
												<span class="Comment">
													<i class="icon fa fa-commenting" aria-hidden="true"></i>
													Comment
												</span>
												<span class="like">
													<i class="icon fa fa-thumbs-o-up" aria-hidden="true"></i>
													1
												</span>
												<span class="dislike">
													<i class="icon fa fa-thumbs-o-down" aria-hidden="true"></i>
												</span>
											</div>
										</div>
									</div>
									<ul class="children">
										<li>
											<div class="comment-item">
												<div class="author-view">
													<div class="author">
														<div class="avt">
															<img src="/avt-blog1.png" alt="img">
														</div>
														<h3 class="name">
															Samuel Godi
														</h3>
													</div>
													<div class="date-reply-comment">
														<span class="date-comment">
															4 days ago
														</span>
													</div>
												</div>
												<div class="comment-body">
													<div class="comment-content">
														<p>
															Ut pellentesque gravida justo non rhoncus.
															Nunc ullamcorper tortor id aliquet luctus.
															Proin varius aliquam consequat.Curabitur a commodo diam, vitae pellentesque urna.
														</p>
													</div>
													<div class="comment-reply-link">
														<span class="Comment">
															<i class="fa fa-commenting" aria-hidden="true"></i>
															Comment
														</span>
														<span class="like">
															<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
															9
														</span>
														<span class="dislike">
															<i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
															1
														</span>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</li>
							</ul>
                           </div>
						</div>
                        <div v-if="hascomment">
                            <div class="pagination clearfix style1">
							<div class="nav-link">
								<a href="#" class="page-numbers"><i class="icon fa fa-angle-left" aria-hidden="true"></i></a>
								<a href="#" class="page-numbers">1</a>
								<a href="#" class="page-numbers">2</a>
								<a href="#" class="page-numbers current">3</a>
								<a href="#" class="page-numbers"><i class="icon fa fa-angle-right" aria-hidden="true"></i></a>
							</div>
                        </div>
						</div>
                        {% endif %}
					</div>
				</div>

    <div class="shangCls" v-show="paymentCardDiplay">
        <div onclick="$('.shangCls').hide();" style="width: 30px;height: 40px;float: right;cursor: pointer;"><img style='width: 15px;' src="/guanbi.png" alt=""></div>
        <div class="_3uZ5OL">
            <div class="sDiv">
                <img src="/avt-blog1.png" alt="">
                <div class="shangtitle">给作者送花</div>
            </div>
            <div class="flower_count">
                <div name="divOption"  checked="checked"  tabindex="2">2</div>
                <div name="divOption"  checked="false"  tabindex="2">5</div>
                <div name="divOption"  checked="false"  tabindex="2">10</div>
                <div name="divOption"  checked="false"  tabindex="2">20</div>
                <div name="divOption"  checked="false"  tabindex="2">50</div>
                <div name="divOption"  checked="false"  tabindex="2">100</div>
            </div>
            <div class="paymethod">选择支付方式</div>
            <div style="text-align: center;" id="paymethod">
                <div name="zhifubao" onclick="pay_method=1;" style="display: inline-block;width: 160px;height: 50px;line-height: 50px;" tabindex="2"><img src="/zhifubao.png" style="width: 25px;" alt="">支付宝支付</div>
                &nbsp;&nbsp;&nbsp;
                <div name="weixin" onclick="pay_method=2;" style="display: inline-block;width: 160px;height: 50px;line-height: 50px;" tabindex="2"><img src="/weixin.png" style="width: 30px;" alt="">微信支付</div>
            </div>
            <button type="button" class="pay_btn" id="pay_btn" onclick="pay();">
                <span>确认支付</span>
                <span>￥</span>2
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { defineProps } from 'vue';

defineProps(['id'])

const hascomment=true;
const paymentCardDiplay=ref(false);
const article = ref({
    title:'民众党选前国际记者会 柯文哲：美中台关系“不要有惊喜',
    content:'台湾民众党正副总统候选人柯文哲、吴欣盈在大选前夕举办国际记者会，柯文哲强调美国是最重要的盟邦，不论谁当总统都不影响台美关系，而他当选后会延续蔡英文的台美外交路线。他還說，虽然这次竞选总统的三位候选人对中国持不同态度，但台湾国家安全不受太大影响。',
    category:{
        name:'分类1'
    },
    images:[
       {url:'https://gdb.voanews.com/9bf714d9-0597-4f50-a20e-af8179e285e1_w1023_r1_s.jpg'},
    ]
})
</script>

<style scoped>
.shangCls{
            position:fixed;
            top:35px;
            left:400px;
            z-index:100;
            border-radius:5px;
            /* mso-border-shadow:yes; */
            width: 640px;
            height: 560px;
            background: white;
            border: 1px solid gray;
        }

        .shangtitle{
            font-size: 24px;
            font-weight: 500;
            margin-left: 16px;
        }

        .sDiv{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 24px;
        }

        ._3uZ5OL{

            padding: 48px 20px;
        }


        .flower_count{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        .flower_count>div,.flower_count>div:last-child>input{
            width: 162.5px;
            align-items: center;
            height: 56px;
            line-height: 56px;
            font-size: 16px;
            color: #969696;
            margin-bottom: 12px;
            margin-right: 12px;
            border-radius: 10px;
            border: 1px solid #969696;
            cursor: pointer;
            text-align: center;


        }



        .flower_count>div:last-child>input{
            cursor: text;
            opacity: 0;
        }

        .flower_count>div:last-child>input::-webkit-outer-spin-button,
        .flower_count>div:last-child>input::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
        /* input[type="number"] {
            -moz-appearance: textfield;
        } */

        #factive{
            color: #ec7259;
            border: 1px solid #ec7259;
        }

        .paymethod{
            font-size: 15px;
            margin: 12px 0;
            text-align: center;
        }

        .pay_btn{
            margin-top: 30px;
            margin-left: 250px;
        }
        .detail-img{
            height: 200px;
            width: 300px;
        }
</style>