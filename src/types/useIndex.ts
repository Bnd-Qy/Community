import {ref,reactive} from 'vue';
export default function(){
    const loginStats=ref(false);
    const user= reactive({
        username:'张三'
    })
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

    function menu_over(ele:any) {
        ele.style.backgroundColor = 'lightgreen';
    }
    function menu_out(ele:any) {
        ele.style.backgroundColor = '';
    }

    return {loginStats,user,channels,categorys,menu_over,menu_out}
}