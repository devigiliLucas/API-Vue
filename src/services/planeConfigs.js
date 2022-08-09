import { http } from './config'

export default {
    get: () => {
        return http.get("/airplanes")
    },
    delete: (id) => {
        return http.delete(`/airplanes/${id}`)
    },
    post: (plane) => {
        return http.post("/airplanes", plane)
    },
    put: (id, airplane) => {
        return http.put(`/airplanes/${id}`, airplane)
    }
}