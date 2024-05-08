import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const API_KEY = 'AIzaSyACGo7OMTmzBJjDPMBx0b_pO2uwAS1xzgs';

export const useAuthStore = defineStore('auth', () => {
    const userInfo = ref({
        token: '',
        email: '',
        userId: '',
        refreshToken: '',
        expiresIn: '',
    })
    const error = ref('');
    const auth = async (payload, type) => {
        const stringUrl = type === 'signup' ? 'signUp' : 'signInWithPassword';
        error.value = '';
        try {
            let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${stringUrl}?key=${API_KEY}`, {
                ...payload,
                returnSecureToken: true,
                displayName: `${payload.firstName} ${payload.lastName}`,
            });
            console.log(response.data)
            userInfo.value = {
                token: response.data.idToken,
                email: response.data.email,
                userId: response.data.localId,
                refreshToken: response.data.refreshToken,
                expiresIn: response.data.expiresIn,
                firstName: payload.firstName,
                lastName: payload.lastName,
            }
            localStorage.setItem('userInfo', JSON.stringify(userInfo.value));
            console.log(response.data);
        } catch(err) {
            switch (err.response.data.error.message) {
                case 'EMAIL_EXISTS':
                    error.value = 'Email already exists'
                    break;
                case 'OPERATION_NOT_ALLOWED':
                    error.value = 'Operation not allowed'
                    break;
                case 'EMAIL_NOT_FOUND':
                    error.value = 'Email not found'
                    break;
                case 'INVALID_PASSWORD':
                    error.value = 'Invalid password'
                    break;          
                default:
                    error.value = 'Error'
                    break;        
            }
            console.log(err.response.data.error.message);
            throw error.value;
        }
    };


    return { auth, userInfo, error }
})