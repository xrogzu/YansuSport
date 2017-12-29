

let href = location.href;//截取URL地址区分是否带项目路径
let localHref = href.substring(0, href.indexOf('/jeeadmin'));
let apiUrl = process.env.Base_URL == '' ? localHref : process.env.Base_URL;//判断是否分离部署
const systemConfig={
    state:{
        // 本地
        appId:'7166912116544627',
        aesKey:'MnYg7Tm8NR1YiYBJ',
        ivKey:'yToM65IuE64VDoEq',
        appKey:'5atYoyckDzDPetcaQZlF1VsK1o8qCQPE',
        baseUrl: apiUrl,
        upLoadUrl: apiUrl+'/api/admin/upload/upload',
        resourceUpLoad: apiUrl +'/api/admin/resource/upload',
        templateUpLoad: apiUrl +'/api/admin/template/upload',
        importTpl: apiUrl +'/api/admin/template/importTpl',
        collapse:false,
    },
    mutations:{
        CHANGE_SET:(state,value)=>{
            state.collapse=!state.collapse;
        }
    },
    actions:{
        setCollapse({commit}){
            commit('CHANGE_SET');
            }
    }
}

export default systemConfig