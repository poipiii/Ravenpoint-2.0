import axios from 'axios';
import { de } from 'date-fns/locale';

const RavenPointApi = axios.create({
    baseURL: 'http://localhost:5000/api',
});
export default RavenPointApi