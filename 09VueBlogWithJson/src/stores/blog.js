import {ref, reactive} from "vue";
import {defineStore} from "pinia";
import {useRouter} from "vue-router";

//반응성은 이제 무조건 여기에서 거의 한다

export const useBlogStore = defineStore("blog",()=>{
    const router = useRouter();
    const blog = ref([{}]);
    const detailsBlog = reactive({});
    const postBlog = reactive({
        title :"",
        content:"",
        img :""
    });

    /*
        env
        vite(빌드 툴) 를 사용하는 경우 프로젝트  로드시 .env 파일을 자바스크립트 엔진이 확인하여
        import.meata.env에 등록한다.
        여기서 클라이언트의 실수로 환경 변수가 유출되는 것을 방지하기 위해 접두사가
        붙은 변수만 사용하게된다.
    */ 
    const blogHandler = () =>{ //조회용
        fetch(import.meta.env.VITE_API_URL + "/post")   // fetch : 외부서버에 요청을 날리는것
        .then(Response=> Response.json())
        .then(data => blog.value = data);
    }

    const detailsHandler = (id) =>{
        fetch(import.meta.env.VITE_API_URL + "/post"+id)
        .then(Response=> Response.json())
        .then(data => detailsBlog.value = {...data}); // 깊은 복사 옅은복사 ... (참조 .해서 0.1 = 0.1 1부분 오른쪽이변경되어도 왼쪽은 1부분변경안됨 )
    }

    const modifyHandler = (blog) =>{
        fetch(import.meta.env.VITE_API_URL + "/post/"+blog.id,{  //fetch 는 옵션{}을가진다
                method : "put",
                body : JSON.stringify({
                    title : blog.title,
                    content : blog.content,
                    img : blog.img
                })
        }).then(respanse => respanse.status)
        .then(result => result == 200? router.push("/") : alert("수정실패") );
    }

    const postHandler = (blog) => {
        fetch(import.meta.env.VITE_API_URL + "/post",{ 
            method : "post",
            body : JSON.stringify({
                id : blogs.value.length + 1,
                title : blog.title,
                content : blog.content,
                img : blog.img
            })
    }).then(respanse => respanse.status)
    .then(result => result == 201? router.push("/") : alert("수정실패") );
    }

    const deleteHandler = (id) => {
        fetch(import.meta.env.VITE_API_URL + "/post/"+id,{
            method : "DELETE"
        }).then(response => response.status)
        .then(data => data ==200? router.push("/") : alert("삭제실패") );
    }

    return {blog, detailsBlog, postBlog, blogHandler, detailsHandler,modifyHandler,postHandler,deleteHandler}
});