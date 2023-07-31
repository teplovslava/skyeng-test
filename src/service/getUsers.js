import axios from "axios"

const baseUrl = 'https://api.github.com/search/users'

export const getUsers = async(url) => {
    try{
        let res = await axios.get(baseUrl + url)
        return res
    }catch(err){
        return err
    }
}