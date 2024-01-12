import { ref } from 'vue';
export default function useRegister(){
    const reg_error_msg = ref('注册失败!')
    /**
     * 用户名
     */
    const username = ref('');
    const error_username = ref(true);
    const error_username_msg = '用户名格式有误';
    async function check_uname():Promise<void>{
        
    }
    /**
     * 手机号码
     */
    const phone = ref('');
    const error_phone = ref(true);
    const error_phone_msg = '手机号码格式有误';
    async function check_phone():Promise<void>{
        
    }
    /**
     * 图形验证码
     */
    const imgcode = ref('');
    const imgcode_url = ref('');
    const error_imgcode = ref(true);
    const error_imgcode_msg ='验证码错误';
    const smscode_btn = '发送短信';
    async function check_imgcode():Promise<void>{
        
    }

    /**
     * 短信验证码
     */
    const smscode=ref('');
    const error_smscode = ref(true);
    const error_smscode_msg =  '短信验证码错误';
    async function check_smscode():Promise<void>{
        
    }

    /**
     * 密码
     */
    const password= ref('');
    const error_password= ref(true);
    const error_password_msg = '密码格式有误';
    async function check_pwd():Promise<void>{
        
    }

    function reg_sub(){

    }

    async function send_smscode(){

    }
    return {
        reg_error_msg,
        username,
        error_username,
        error_username_msg,
        phone,
        error_phone,
        error_phone_msg,
        imgcode,
        imgcode_url,
        error_imgcode,
        error_imgcode_msg,
        smscode_btn,
        smscode,
        error_smscode,
        error_smscode_msg,
        password,
        error_password,
        error_password_msg,
        check_uname,check_phone,check_pwd,check_smscode,check_imgcode, reg_sub,send_smscode
    }
}