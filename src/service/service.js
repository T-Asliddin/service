import http from './config'
const service = {
    
    create_service: (data)=> http.post("/service",data),
    get:()=>http.get("/service/all" , {params:{page:1, limit:10}}),
    delete: (id)=> http.delete("service", {params:{id}}),
    

}
export default service