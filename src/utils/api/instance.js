import axios from 'axios';

import {BASEURL} from '../constants/baseUrl'

export const api = axios.create({
    baseURL: BASEURL
});