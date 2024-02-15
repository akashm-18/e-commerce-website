import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api/'

const TOKEN = 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzcwZWU2YTUxZjZiZWY3ODdiNGZlYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNzU0NDc1MCwiZXhwIjoxNzA3ODAzOTUwfQ.SP-dmxBt6RVMl9qWPN9LQ4MtmiRxlDcD-GRDwnRoQNY"

export const publicRequest = axios.create({
    baseURL : BASE_URL ,
})

export const userRequest = axios.create({
    baseURL : BASE_URL ,
    headers : { token : `Bearer ${TOKEN}` }
})