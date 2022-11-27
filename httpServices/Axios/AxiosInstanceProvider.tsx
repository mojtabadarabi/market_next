import {createContext, useEffect, useRef} from "react";
import axios from "axios";
import {func} from "prop-types";
import {authRequestsHeaderKey} from "../../Configs/AppConfigs";

export const AxiosContext = createContext(null);
// @ts-ignore
export default function AxiosInstanceProvider ({
                                   config = {},
                                   requestInterceptors = [],
                                   responseInterceptors = [],
                                   children,
                               }:any) {
    const instanceRef = useRef(axios.create(config));



    useEffect(() => {
        instanceRef.current.interceptors.request.use((config:any)=>{
            config.headers[authRequestsHeaderKey] = 'token'
            return config
        })
        requestInterceptors.forEach((interceptor:any) => {
            instanceRef.current.interceptors.request.use(
                interceptor
            );
        });
        responseInterceptors.forEach((interceptor:any) => {
            instanceRef.current.interceptors.response.use(
                interceptor
            );
        });
    }, []);

    const fetch = ()=>{

    }

    // @ts-ignore
    return (
        <AxiosContext.Provider value={instanceRef.current}>
            {children}
        </AxiosContext.Provider>
    );
};

