import requset from '@/utils/request.ts'

enum API {
    HOSPITAL_URL = '/hospital/general-info'
}

export const generalHospital = (pageNum:number, pageSize:number) => {
    requset.get(API.HOSPITAL_URL + `${pageNum}/${pageSize}`)
}