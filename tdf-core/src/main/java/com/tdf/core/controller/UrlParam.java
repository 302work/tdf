package com.tdf.core.controller;

import com.season.common.SafeKit;
import com.season.common.StrKit;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 处理url上的参数
 * @author june
 * 2015年12月21日 13:53
 */
public class UrlParam {

    private Map<String,Object> paramMap;
    private List<String> keys = new ArrayList<String>();

    private Map<String,Object> initParamMap = new HashMap<String,Object>();
    private List<String> initKeys = new ArrayList<String>();

    public UrlParam(BaseController controller,String... keys){
        this.paramMap = controller.getParamMap();
        if(keys==null || keys.length==0){
            this.keys = controller.getParamKeys();
        }else{
            for(String key : keys){
                this.keys.add(key);
            }
        }
        initParamMap.putAll(paramMap);
        this.initKeys.addAll(this.keys);
    }
    private UrlParam(){}


    /**
     * 要拼接到url上的参数
     * 大概这个样子 userId=1&userName=a&age=3&pageNo=1&pageSize=10&typeId=1
     * @return
     */
    public String getUrlParams(){
        if(paramMap==null || paramMap.isEmpty()){
            return "";
        }
        if(keys==null || keys.size()==0){
            return "";
        }
        String currParams = "";
        for(String key : keys){
            if(paramMap.containsKey(key)) {
                String value = null;
                try {
                    value = URLEncoder.encode(SafeKit.getString(paramMap.get(key)),"utf-8");
                } catch (UnsupportedEncodingException e) {
                    throw new RuntimeException(e);
                }
//                String value = SafeKit.getString(paramMap.get(key));
                if (StrKit.isNotEmpty(value)) {
                    String str = key + "=" + value;
                    if (currParams == "") {
                        currParams = str;
                    } else {
                        currParams += "&" + str;
                    }
                }
            }
        }
        return currParams;
    }

    /**
     * 设置某个参数的值
     * @param key 参数
     * @param value 值
     * @return
     */
    public UrlParam setParam(String key,Object value){
        if(StrKit.isNotEmpty(key)){
            paramMap.put(key,value);
            if(!keys.contains(key)){
                keys.add(key);
            }
        }
        return this;
    }

    /**
     * 重置所有参数的值为默认值
     * @return
     */
    public UrlParam reset(){
        paramMap.clear();
        paramMap.putAll(initParamMap);
        keys = new ArrayList<String>();
        keys.addAll(initKeys);
        return this;
    }

}
