import axios from 'axios'

/**
 * baseURLを設定しない場合 /sitemap.xml にリクエストするとエラーが発生します。
 * > connect ECONNREFUSED 127.0.0.1:80*
 *
 * npm run devで立ち上がるローカル環境のポート番号は（デフォルトだと）3000なので
 * ポート番号80でリクエストしても到達できないことが原因です。
 *
 * axiosのリクエストURL
 *   baseURLあり => http://localhost:3000/api/get
 *   baseURLなし => http://127.0.0.1:80/api/get
 **/

const instance = axios.create({
  baseURL: 'http://localhost:62108'
})

export const axiosInstance = instance
