import axios from "axios"

const URL='http://127.0.0.1:5000'

export function uploadImage(fd) {
    return axios.post(`${URL}/upload`, fd)
}
export function getHistogramEqualization() {
    return axios.get(`${URL}/histEq`)
}
export function getSobleAndLablace(mode) {
    return axios.post(URL+"/sobel_and_lablace",{mode})
}
export function getFourier() {
    return axios.get(URL+"/fourier")
}
export function getSaltAndPepper(amount,size) {
    return axios.post(URL+"/salt_and_pepper",{amount,size})
}
export function getPeriodic(nx,ny,mode) {
    return axios.post(URL+"/periodic",{nx,ny,mode})
}
export function selectPeriodicFilter(filter,nx,ny) {
    return axios.post(URL+"/filter",{filter,nx,ny})
}
export function maskFilter(x,y,height,width,click) {
    return axios.post(URL+"/mask",{x,y,height,width,click})
}
export function clear() {
    return axios.delete(URL+"/clear")
}
export function imageUrlPrefix(){
    return 'data:image/jpeg;base64,'
}
