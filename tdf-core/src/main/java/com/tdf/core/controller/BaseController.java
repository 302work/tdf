package com.tdf.core.controller;

import com.season.common.PojoKit;
import com.season.core.Controller;
import com.season.core.db.Pojo;

import java.util.*;

/**
 * @author june
 * 2015年12月02日 10:15
 */
public class BaseController extends Controller {

    public <T extends Pojo> T getPojo(Class<T> clazz) {
        return PojoKit.build(clazz, getParamMap());
    }

    public Map<String, Object> getParamMap() {
        Enumeration<String> oParamName = getRequest().getParameterNames();
        Map<String, Object> oNameMap = new HashMap<String, Object>();
        for (Enumeration e = oParamName; e.hasMoreElements(); ) {
            String thisName = e.nextElement().toString();
            String thisValue = getRequest().getParameter(thisName);
            oNameMap.put(thisName, thisValue);
        }
        return oNameMap;
    }

    /**
     * 获取所有参数名
     * @return
     */
    public List<String> getParamKeys() {
        Enumeration<String> oParamName = getRequest().getParameterNames();
        List<String> keys = new ArrayList<String>();
        for (Enumeration e = oParamName; e.hasMoreElements(); ) {
            keys.add(e.nextElement().toString());
        }
        return keys;
    }
}
